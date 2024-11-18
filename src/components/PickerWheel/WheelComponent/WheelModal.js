import { CrownFilled, CrownTwoTone, ExclamationCircleOutlined } from "@ant-design/icons";
import { Flex, Modal } from "antd";
import React from "react";
import { Typography } from 'antd';

const { Text } = Typography;

export default class WheelModal extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isShowModal: props.isShowModal,
      currentLabel: props.currentLabel,
      onConfirmCallback: props.onConfirmCallback
    }
}


componentDidUpdate = (prevProps) =>{
  if(this.props.isShowModal != prevProps.isShowModal){
    this.state = {
      isShowModal: this.props.isShowModal,
      currentLabel: this.props.isShowModal,
      onConfirmCallback: this.props.onConfirmCallback
    }
  }

}

  hideModal = () => {
    this.setState({
      isShowModal: false,
      currentLabel: ''
    })
    this.state.onConfirmCallback();
  };

  removeItem = () => {
    this.setState({
      isShowModal: false,
      currentLabel: ''
    })
    this.state.onConfirmCallback(this.state.currentLabel);
  }


  render() {

    return (
      <>
        <Modal
          title="CONGRATULATIONS"
          icon={CrownTwoTone}
          open={this.state.isShowModal}
          onOk={this.hideModal}
          destroyOnClose={true}
          okText="OK"
          cancelText="REMOVE"
          onCancel={this.removeItem}
        >
          <Flex justify="flex-start" style={{fontSize: 18}}>
            <p/>
            <p>
              The winner is 
              <Text style={{color: "#B8860B", fontWeight: 'bold'}}> &nbsp;&nbsp;{this.state.currentLabel}</Text>
            </p>
          </Flex>
        </Modal>
      </>
    );

  }

}