import React from "react";
import {Wheel} from './src/wheel.js';
import { AlignText } from "./src/constants.js";
import { loadImages } from "./scripts/util.js";
import { Button, Image as AntdImage, Layout, Flex, notification, Tooltip, Modal, Input } from "antd";

import image0 from '../../../assets/images/example-0-image.svg'
import overlay0 from '../../../assets/images/example-0-overlay.svg'
import WheelModal from "./WheelModal.js";
import { EditOutlined } from "@ant-design/icons";

const MODEL_SIMPLE = 1;
const MODEL_ORDINARY= 0;

class MWheel extends React.Component {
    getWheelWidth = (model) => {
      if(model == MODEL_SIMPLE){
        return 400
      }
      return 750;
    }

    constructor(props) {
        super(props);
        this.wheelContainer = React.createRef();
        this.wheelTitleRef = React.createRef();
        this.isResetOnce = false;
        this.tempTitle = '';
        this.showModel = props.showModel? props.showModel: MODEL_ORDINARY;
        this.wheel_width = this.getWheelWidth(this.showModel);
        this.state = {
            originName: props.wheelProp.name,
            alias: props.wheelProp.name,
            items: props.wheelProp.items,
            modifier: 0,
            isShowModal: false,
            isShowEditTitle: false,
            currentLabel: '',
            onItemChange: props.onItemChange,
            onResetCallback: props.onResetCallback
        }
    }

    notifyCurrentIndexChange = (val) => {
      // console.log('index change: '+JSON.stringify(val)+", name="+this.state.items[val.currentIndex]?.label);
    }

    notifyOnSpin = (val) => {
      // console.log('onSpin : '+JSON.stringify(val));
    }

    notifyOnRest = (val) => {
      if(this.isResetOnce){
        this.isResetOnce = false;
        return;
      }
      if(val){
        console.log('onRest : '+this.state.items[val?.currentIndex]?.label);
        this.setState({
          isShowModal: true,
          currentLabel: this.state.items[val?.currentIndex]?.label
        })
      }
    }

    onConfirmCallback = (val) =>{
      let selectedLabel = this.state.currentLabel;

      console.log('onConfirmCallback : '+ JSON.stringify(val));

      if(this.state.items && this.state.items.length>0){
        let newItems = this.state.items.filter((item) => { 
          if(item && item['label']) return item['label'] !== val
        });
        this.state.mWheel.items = newItems;
  
        this.setState({
          items: newItems,
          isShowModal: false,
          currentLabel: ''
        })
  
        if(this.state.onItemChange) this.state.onItemChange(newItems, selectedLabel);
      }
    }

    componentDidUpdate = (prevProps) => {
      if(this.props.wheelProp.items != prevProps.wheelProp.items || this.props.wheelProp.isReset){
        this.state.mWheel.items = this.props.wheelProp.items;
      
        this.setState({
          originName: this.props.wheelProp.name,
          alias: this.props.wheelProp.name,
          items: this.props.wheelProp.items,
          isReset: this.props.wheelProp.isReset
        })

        if(this.props.wheelProp.isReset){
          this.props.wheelProp.isReset = false;
          this.setState({
            modifier: 0,
            currentLabel: ''
          })
          this.isResetOnce = true;
          this.state.mWheel.spinTo();
        } 
      }
    }

    componentDidMount = () =>{
        const element = this.wheelContainer.current;
        if (element) {
          let pro = this.getWheelProps();              
          let tempWheel = new Wheel(element, pro);

          this.setState({
              mWheel: tempWheel
          })

        }
    }

    getWheelProps = ()=>{
      let props2 = {
        name: this.state.alias,
        radius: 0.84,
        itemLabelRadius: 0.93,
        itemLabelRadiusMax: 0.35,
        itemLabelRotation: 180,
        itemLabelAlign: AlignText.left,
        itemLabelColors: ['#fff'],
        itemLabelBaselineOffset: -0.07,
        itemLabelFont: 'Amatic SC',
        itemLabelFontSizeMax: 55,
        itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062' ],
        rotationSpeedMax: 500,
        rotationResistance: -100,
        lineWidth: 1,
        lineColor: '#fff',
        // image: image0,
        overlayImage: overlay0,
        items: this.state.items,
        onCurrentIndexChange: this.notifyCurrentIndexChange,
        onSpin: this.notifyOnSpin,
        onRest: this.notifyOnRest 
      }

      let images = [];
      images.push(this.initImage(props2, 'image'));
      images.push(this.initImage(props2, 'overlayImage'));
      for (const item of props2.items) {
          images.push(this.initImage(item, 'image'));
      }
      
      loadImages(images);
      return props2;
    }


    initImage(obj, pName) {
        if (!obj.hasOwnProperty(pName) || !obj[pName]) return null;
        const i = new Image();
        i.src = obj[pName];
        obj[pName] = i;
        return i;
    }


    openNotification = () => {
      const args = {
        message: 'Alert',
        description: "One name left on the wheel —— no more spinning!",
        duration: 3
      };
      notification.warning(args);
    };
    

    clickToSpin=()=>{
      if(this.state.mWheel.items.length <= 1){
        this.openNotification();
        return;
      }
      const {duration, winningItemRotaion} = this.calcSpinToValues();
      this.state.mWheel?.spinTo(winningItemRotaion, duration);
    }

    calcSpinToValues= ()=>{
        const duration = 3000;
        const winningItemRotaion = this.getRandomInt(360, 360 * 1.75) + this.state.modifier;
        this.setState( (prevState)=> ({
            modifier: (prevState.modifier + 360 * 1.75)
        }))
        return {duration, winningItemRotaion};
      }


    getRandomInt= (min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };

    
    showEditModal = () =>{
      this.setState({
        isShowEditTitle: true
      })
    }  

    clickToReset = () =>{
      this.state.onResetCallback(this.state.originName);
    }

    handleOk =()=>{
      console.log(this.wheelTitleRef.current.value);
      this.setState((prevProps)=>{
        return {
          alias: this.tempTitle == ''? prevProps.alias: this.tempTitle,
          isShowEditTitle: false,
        }

      })
    }

    handleCancel = ()=>{
      this.tempTitle = '';
      this.setState({
        isShowEditTitle: false
      })
    }

    render() {
        return (
            <div style={{ width: 400 }}>

              <Flex align="center" justify="center" vertical gap="small">
                <div>
                  <label style={{fontSize: '16px', fontWeight: 'bold'}} >{this.state.alias} </label>
                  {
                    this.showModel == MODEL_ORDINARY && 
                    <Tooltip title="Click to edit" placement="right" >
                      <EditOutlined onClick={this.showEditModal}/>
                    </Tooltip>
                  }
                </div>
                
                <div ref={this.wheelContainer} style={{ width: this.wheel_width }}></div>

                {
                  this.showModel == MODEL_ORDINARY && 
                  <Flex align="center" vertical={false} justify="space-evenly" gap="large">
                    <Button style={{width: 100}} type='primary' size={"large"} variant="solid" onClick={this.clickToSpin}>Spin</Button>
                    <Button style={{width: 100}}  size={"large"} variant="solid" color="danger" onClick={this.clickToReset}>Reset</Button>

                  </Flex>
                }
                
              </Flex>

              {this.state.isShowModal && 
                <WheelModal isShowModal={this.state.isShowModal} currentLabel={this.state.currentLabel} onConfirmCallback={this.onConfirmCallback} showModel={this.showModel}/>
              }

              
              <Modal title="Edit wheel title" open={this.state.isShowEditTitle} onOk={this.handleOk} onCancel={this.handleCancel}>

                <Input
                  ref={this.wheelTitleRef}
                  placeholder="Please enter a title"
                  defaultValue={this.state.alias}
                  onChange={e => this.tempTitle= e.target.value}
                />
              </Modal>
            

            </div> 
        );
    }

}

export default MWheel;

