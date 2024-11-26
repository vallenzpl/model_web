import { Avatar, Button, Card, Col, Collapse, ConfigProvider, Divider, Flex, FloatButton, Input, Layout, List, Row, Space, Tabs, TabsProps, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import MWheel from "./WheelComponent/MWheel";
import { Item } from "./WheelComponent/src/item";
import TextArea from "antd/es/input/TextArea";
import wheelProps from "./wheelprops"
import { FireTwoTone} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import mlbTeamGroups from './mlbTeam'


const PickerWheel: React.FC<any> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const findPropByName = (destName: string) => {
      if(wheelProps){
        for(let prop of wheelProps){
          if(prop && prop['name'] === destName){
            return prop
          }
        }
      }
      return {
        'name' : 'unknown',
        'items' : [],
        'desp' : ''
      }
    }

    const translateValue = (value: string | undefined) => {
      if(!value){
        return '';
      }

      let result = '';
      switch (value) {
        case 'Fitness Fortune':
          result = 'fitnessfortune';
          break;
        case 'Yes or No':
          result = 'yesorno';
          break;
        case 'Random NFL Teams':
          result = 'randomnflteams';
          break;
        case 'Popular Cities':
          result = 'popularcities';
          break;
        case 'Rock, Paper, Scissors':
          result = 'rockpaperscissors';
          break;

        ///////////////////////////
        case 'fitnessfortune':
          result = 'Fitness Fortune';
          break;
        case 'yesorno':
          result = 'Yes or No';
          break;
        case 'randomnflteams':
          result = 'Random NFL Teams';
          break;
        case 'popularcities':
          result = 'Popular Cities';
          break;
        case 'rockpaperscissors':
          result = 'Rock, Paper, Scissors';
          break;


        case 'Random MLB Team':
          result = 'random-mlb-team';
          break;     
        case 'random-mlb-team':
          result = 'Random MLB Team';
          break;

      }
      return result;
    }



    const wheelCommonDesp = "Introducing our innovative online decision-making aid: the Picker Wheel! \n "
            + "This interactive and engaging tool is perfect for those moments when you're stuck between choices. Whether you're looking for a random name or item selection, our Picker Wheel simplifies the process with a touch of fun.\n " 
            +"Often, the challenge of making decisions can be overwhelming. With our Picker Wheel, simply compile a list of your options or candidates and let the wheel do the rest. It's as easy as spinning the wheel and watching it land on a random choice from your list.\n "
            +"To use our Picker Wheel, start by customizing the names in the provided textarea. Enter each name on a new line, and our tool will arrange them around the wheel. With just a click, the wheel springs into action, spinning for a few seconds before landing on a selection from your list. It's that simple!\n "
            +"The Picker Wheel is not just a random name picker; it's a game-changer for group activities, brainstorming sessions, or any scenario where a bit of luck can guide the way. So, the next time you're faced with a tough decision, spin the wheel and let fate decide. It's the perfect blend of simplicity and excitement, making every choice an adventure.";

    const defaultWheelName = 'Random MLB Team';
    let curWheelName = defaultWheelName;
    if(location.state){
      let temp = translateValue(location.state['wheelName']);
      if(temp != ''){
        curWheelName = temp;
      }
    }else {
      let path = location['pathname'];
      let pathArray: string[] = path.split('/').filter((item)=> item!='');
      if(pathArray.length>1){
        for(let item of pathArray){
          if(item.toLocaleLowerCase() != 'pickerwheel'){
            curWheelName = translateValue(item);
            break;
          }
        }
      }
    }

    let curWheelProp = findPropByName(curWheelName);

    const wheelInitInfo = {
      name: curWheelProp.name,
      items: curWheelProp.items,
      desp: curWheelProp.desp,
      resultString: '',
      resultCount: 0,
      isReset: false
    }

    const [wheelInfo, setWheelInfo] = useState(wheelInitInfo);

    useEffect(() => {
      if(wheelInfo.name != curWheelProp.name){
        setWheelInfo(generateWheelByProps(curWheelProp));
      }

    }, [location]);

    
    const itemsString = wheelInfo.items.map((item) => {
      if(item && item['label']){
        return item.label;
      } 
    }).join('\n')


    const handleChange = (e: any) => {
      const newValue = e.target.value;
      const newLines: Item[] = newValue.split('\n').map((line:string) => {
        if(line && line.trim()!='') {
          return { label: line }
        }
      });
      setWheelInfo((prevWheelInfo) => ({
        ...prevWheelInfo,
        items: newLines
      }));
    };

    const onItemChange = (items: Item[], selectedLabel: string) => {
      setWheelInfo((prevWheelInfo) => ({
        ...prevWheelInfo,
        items: items,
        resultString: (prevWheelInfo.resultString === ''? selectedLabel: (prevWheelInfo.resultString +'\n' + selectedLabel)),
        resultCount: ++prevWheelInfo.resultCount
      }))
      
    }

    const onResetCallback = (cName:string) =>{
      setWheelInfo(generateWheelByName(cName));
    }

    const onWheelChange =(e:any)=>{
      // console.log('点击了'+ JSON.stringify(e.target.textContent));
      // setWheelInfo(setWheelByName(e.target.textContent));

      let realName = translateValue(e.target.textContent);

      navigate('/pickerwheel/'+realName, { state: { wheelName: realName } });

    }

    const generateWheelByName = (wName: string)=>{
      curWheelName = wName;
      curWheelProp = findPropByName(curWheelName);
      return generateWheelByProps(curWheelProp);
    }

    const generateWheelByProps = (mProps: any)=>{
      return {        
        name: mProps.name,
        items: mProps.items,
        desp: mProps.desp,
        resultString: '',
        resultCount: 0,
        isReset: true
      }
    }

    const onTabChange = (key: string) => {
      // console.log(key);
    };
    
    const tabItems: TabsProps['items'] = [
      {
        key: '0',
        label: `Entries(${wheelInfo.items.length})`,
        children: <Input.TextArea
                    value={itemsString}
                    onChange={handleChange}
                    rows={15}
                    placeholder="Please enter the name !"
                  /> ,
      },
      {
        key: '1',
        label: `Results(${wheelInfo.resultCount})`,
        children: <TextArea
                    value={wheelInfo.resultString}
                    rows={15}
                    placeholder="Take a spin !"
                  /> 
      }
    ]


    return (
        <Layout>

            <Content style={{ padding: '0 48px'}}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG}}>
                
                    <div style={{padding: 5, minHeight: 380}}>

                      <Flex align="flex-start" justify="center" >
                      
                        <MWheel wheelProp={wheelInfo} onItemChange={onItemChange} onResetCallback={onResetCallback}/>

                        <ConfigProvider
                          theme={{
                            components: {
                              Tabs: {
                                cardGutter: 6,
                                horizontalMargin: '0 0 5px 0'
                              },
                            },
                          }}
                        >
                          <Tabs
                            onChange={onTabChange}
                            type="card"
                            items={tabItems}
                            style={{width:300, marginLeft: 20}}
                            />
                        </ConfigProvider>

                      </Flex>
                    </div>

                    
                    {curWheelName == 'Random MLB Team' &&
                      <div style={{paddingLeft: 30, paddingRight: 30, margin: 25}}>
                        <Row gutter={[16, 24]}>
                            {
                              mlbTeamGroups.map(groupItem => (
                                <Col span={8}>
                                  <Card size="small" title={groupItem.nm} style={{width: 320, backgroundColor: '#f7f7f6' }}>
                                    <List
                                      className="demo-loadmore-list"
                                      itemLayout="vertical"
                                      dataSource={groupItem.tms}
                                      renderItem={(item) => (
                                        <List.Item>
                                          <Flex align="center" justify="flex-start" vertical={false} gap="middle">
                                            <Avatar src={item.p} />
                                            <p style={{fontSize: 16, fontWeight:"bold"}}>{item.n}</p>
                                          </Flex> 
                                        </List.Item>
                                      )}
                                    />
                                  </Card>
                                </Col>
                              ))
                            }
                        </Row>
                      </div>
                    }

                      
                    <Flex align="flex-start" justify="center" >
                      <Space direction="vertical" size="middle" style={{ width: '90%', marginTop: 50, marginBottom: 30 }}>
                        {
                          wheelInfo.desp && (wheelInfo.desp!='') &&
                          <Collapse
                            items={[{ key: '1', label: 'Introducing the '+wheelInfo.name, children: 
                                <div style={{fontSize:'15px'}}>
                                  {wheelInfo.desp.split('\n').map((line: string, index: number) => (
                                    <p key={index}>{line}</p>
                                  ))}
                                </div>
                              }]}
                            defaultActiveKey={['1']}
                            style={{ background: colorBgContainer, backgroundColor: '#f7f7f6', fontSize:'18px', fontWeight: "bold" }}
                            expandIconPosition="start"
                          />
                        }
                        

                        <Collapse
                            items={[{ key: '1', label: 'What is the picker wheel?', children: 
                                <div style={{fontSize:'16px'}}>
                                  {wheelCommonDesp.split('\n').map((line: string, index: number) => (
                                      <p key={index}>{line}</p>
                                    ))}
                                </div>
                              }]}
                            defaultActiveKey={['1']}
                            style={{ background: colorBgContainer, backgroundColor: '#f7f7f6', fontSize:'18px', fontWeight: "bold" }}
                            expandIconPosition="start"
                          />

                      </Space>
                    </Flex>
                  
                </Layout>
            </Content>

            
            <FloatButton.Group style={{
                position: 'fixed',
                right: 10,
                top: '10%',
              }}>
              <Flex vertical justify="center" style={{backgroundColor: '#c9b5a159', borderRadius: 12}}>
    
                <Divider >
                  <div style={{ textAlign: 'center' }}>
                    <FireTwoTone twoToneColor="#f1292b"/>
                    <strong><label style={{ fontSize: '15px' }}> Hot wheel</label></strong>
                  </div>
                </Divider>

                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Random MLB Team</Button>
                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Fitness Fortune</Button>
                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Yes or No</Button>
                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Random NFL Teams</Button>
                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Popular Cities</Button>
                <Button type="text" onClick={onWheelChange} style={{fontSize:'13px', fontWeight: 'bold'}}>Rock, Paper, Scissors</Button>

              </Flex>
            </FloatButton.Group>

            
            <FloatButton.BackTop visibilityHeight={0} />

        </Layout>
        
    )
};

export default PickerWheel;

