import React, { useEffect, useState } from 'react';
import { Flex, Image, Layout, theme } from 'antd';
import logo5 from '../../assets/images/logo5.png'
import homeWomanImg from '../../assets/images/home_woman.png'
import MWheel from '../PickerWheel/WheelComponent/MWheel';
import wheelProps from "../PickerWheel/wheelprops"
import { Item } from '../PickerWheel/WheelComponent/src/item';


const { Content } = Layout;



const Home: React.FC = () => {

  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const destName = 'Rock, Paper, Scissors';

  const findProp = ()=>{
    for(let prop of wheelProps){
      if(prop && prop['name'] === destName){
        return prop;
      }
    }
    return {};
  }


  const [wheelInfo, setWheelInfo] = useState(findProp());

  const homeDesp = "Often, the challenge of making decisions can be overwhelming. With our Picker Wheel, simply compile a list of your options or candidates and let the wheel do the rest. \n"
  +"It's as easy as spinning the wheel and watching it land on a random choice from your list.\n "
  +"The Picker Wheel is not just a random name picker; it's a game-changer for group activities, brainstorming sessions, or any scenario where a bit of luck can guide the way. \n"
  +"So, the next time you're faced with a tough decision, spin the wheel and let fate decide. It's the perfect blend of simplicity and excitement, making every choice an adventure.";


  const onItemChange = (items: Item[], selectedLabel: string) => {
    setWheelInfo((prevWheelInfo) => ({
      ...prevWheelInfo,
      items: items
    }))
    
  }



  return (
  
    <Layout>
        
      <Content style={{ padding: '0 48px' }}>
      
          <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>

          <div
              style={{
              padding: 20,
              minHeight: 380
              }}>

              <Flex vertical={false} align="center" justify="flex-start" gap="middle">

                <Image src={logo5} height={45}/>

                <h1 style={{color: '#444242', fontSize: 32}}>Make decisions easily with our picker wheel ! </h1>

              </Flex>

              <Flex vertical={false} align="center" justify="space-between" gap="middle">
                <div style={{}}>
                  <div style={{fontSize: 30, fontWeight: 'bold', lineHeight: 2.5}}>
                    When you're faced with a tough decision, 
                    <div style={{color: '#ad8562'}}><a href='/pickerWheel' style={{color: '#ad8562', textDecorationLine: "underline"}}>spin the wheel</a>
                    &nbsp; and let fate decide.</div> 
                    
                  </div>
                  
                </div>

                <div style={{height: 250}}>
                  <MWheel wheelProp={wheelInfo} showModel={1} onItemChange={onItemChange}/>
                </div>
              </Flex>
              
    
              <div style={{fontSize:'20px',lineHeight: 1.5}}>
                {homeDesp.split('\n').map((line: string, index: number) => (
                    <p key={index}>{line}</p>
                  ))}
              </div>
             
              <Flex vertical={false} align="center" justify="space-between" gap="middle" style={{borderRadius: 10, backgroundColor: '#f5f1ed', padding: 20}}>
                <p style={{color: '#cb9b03', fontSize: 30, fontWeight: 'bold', lineHeight: 2}}>Simplicity and excitement,<br/> making every choice an adventure.</p>
                <Image src={homeWomanImg} height={350}/>
              </Flex>
      
          </div>
          </Layout>
      </Content>
    </Layout>
  )
};

export default Home;