import { Flex, Image, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useLocation, useParams } from "react-router-dom";
import logo5 from '../../assets/images/logo5.png'
import office from '../../assets/images/office.jpeg'


const AboutPage: React.FC = () => {

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const params = useParams();
    const location = useLocation();
  
    // 打印路由参数和当前位置
    console.log('Params:', JSON.stringify(params));
    console.log('Location:', JSON.stringify(location));

    const aboutDesp = "Hello there!\n"
                +"I'm Shawn, and welcome to my website! \n"
                +"I'm thrilled to have you here and to cross paths with you in this digital space.\n"
                +"Things are always looking up, and I believe in the power of positive change. \n";
    
    const aboutD2 = "Your inquiries and interactions are what make this community thrive.\n"
                +"I'm grateful for your presence, and I look forward to the journey ahead. \n"
                +"Remember, \"Alone we can do so little; together we can do so much.\"  So let's make the most of this connection.\n"
                +"Thank you for being here!";            

    return (

        <Layout>
            <Content style={{ padding: '0 80px'}}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>

                    <Flex style={{padding: 20}} vertical={false} align="center" justify="flex-start" gap="middle">

                        <Image src={logo5} height={45}/>

                        <h1 style={{color: '#444242', fontSize: 32}}>About us </h1>

                    </Flex>

                    <Flex style={{padding: "0 20", fontSize:'20px',lineHeight: 1.5}} vertical align="center" justify="flex-start">
                        <Image src={office} height={350}/>

                        <div>
                            {aboutDesp.split('\n').map((line: string, index: number) => (
                                <p key={index}>{line}</p>
                            ))}
                            If you have any questions or just want to connect, feel free to drop me a line at: <a href="mailto:zhuxw549@gmail.com">my email</a>
                            {aboutD2.split('\n').map((line: string, index: number) => (
                                <p key={index}>{line}</p>
                            ))}

                        </div>

                    </Flex>
                
                </Layout>
            </Content>
        </Layout>
        
    )
};

export default AboutPage;
