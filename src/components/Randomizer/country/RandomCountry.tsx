import { Button, Collapse, Descriptions, DescriptionsProps, Flex, Image, Layout, Space, Spin, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import countryMap from "./countryProps"


const RandomCountry: React.FC = () => {

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const [show, setShow] = useState(false);

    const loadingContent = "Just a moment...";

    const countryDesp = "Ready to embark on a global adventure from your fingertips? Introducing our exciting new feature: the \"Random Country, Here We Go!\" button. With just one click, dive into a world of endless possibilities and let fate be your travel guide.\n"
                        +"Unleash the Explorer in You:\n"
                        +"Our \"Random Country, Here We Go!\" button is your ticket to a random nation's wonders. Are you craving a beach getaway, a historical exploration, or a culinary adventure? Spin the wheel of fate and discover your next travel destination.\n"

                        +"How It Works:\n\n"

                        +"1. Click & Discover: Press the \"Random Country, Here We Go!\" button to initiate the journey.\n"
                        +"2. Country Highlights: Instantly receive a spotlight on a random country, including must-know facts, travel tips, and top attractions.\n"
                        +"3. Inspire & Plan: Use the insights to fuel your wanderlust and start planning your next great escape.\n\n"
                        +"Whether you're a seasoned traveler seeking new experiences or a novice adventurer looking for inspiration, our random country feature is designed to ignite your passion for exploration. So, what are you waiting for? Click the button, and let the travel planning begin. Your next great adventure is just a click away with \"Random Country, Here We Go!\"\n";

    //总数117
    const MAX = 117;
    const MIN = 1;

    const itemsInit: DescriptionsProps['items'] = [];

    const [items, setItems] = useState(itemsInit);

    // const imagePath = `./assets/countryEmoji/${countryMap['97'].locale}.png`;


    const loadImage = async (iconName: string) => {
        let imageSrc = await import(`../../../assets/countryEmoji/${iconName}.png`);
        return <Image src={imageSrc}/>;
      };

    const onClickForRandom = ()=>{
        setShow(true);
        let index = (Math.round((Math.random() * (MAX - MIN + 1))) + MIN).toString();
        if (countryMap.hasOwnProperty(index)) { // 检查属性是否为对象自身的属性
            // console.log('随机数:'+index+", 国家:"+ JSON.stringify(countryMap[index]));
            setItems([
                {
                    key: '1',
                    label: 'National Flag',
                    children: countryMap[index].emoji,
                },
                {
                    key: '2',
                    label: 'Country Name',
                    span: 2,
                    children: countryMap[index].en,
                },
                {
                    key: '4',
                    label: 'Latitude',
                    children: countryMap[index].lat,
                },
                {
                    key: '5',
                    label: 'Longitude',
                    children: countryMap[index].lng,
                },

            ])

        }
        setShow(false);
    }


    useEffect(() => {
    
      }, []); // 空数组确保只在组件挂载时执行一次
    

    return (

        <Layout>
            <Content style={{ padding: '0 80px'}}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                
                    <div style={{ padding: 20, minHeight: 80 }}>

                        <Flex align="center" justify="center" vertical={true} gap="large">
                            <Button type="primary" style={{width: 220, height: 40}} onClick={onClickForRandom}>Random country, here we go! </Button>
                            <Spin spinning={show} tip={loadingContent} size="large"></Spin>

                            {/* <Image src={imagePath}/> */}
                            {items.length>0? <Descriptions  title="Country Info" layout="vertical" bordered items={items} />:<></>}
                            
                        </Flex>
                    </div>

                    <Flex align="flex-start" justify="center" >
                      <Space direction="vertical" size="middle" style={{ width: '85%', marginTop: '50px', marginBottom: 30 }}>
                        <Collapse
                            items={[{ key: '1', label: 'Introducing the Random Country', children: 
                                <div style={{fontSize:'15px'}}>
                                  {countryDesp.split('\n').map((line: string, index: number) => (
                                    <p key={index}>{line}</p>
                                  ))}
                                </div>
                              }]}
                            defaultActiveKey={['1']}
                            style={{ background: colorBgContainer, fontSize:'18px', fontWeight: "bold" }}
                            expandIconPosition="start"
                          />
                        </Space>
                    </Flex>
                </Layout>
            </Content>
        </Layout>
        
    )
};

export default RandomCountry;

