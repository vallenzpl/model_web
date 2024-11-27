import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useLocation, useParams } from "react-router-dom";


const SettingPage: React.FC = () => {

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const params = useParams();
    const location = useLocation();
  
    // 打印路由参数和当前位置
    console.log('Params:', JSON.stringify(params));
    console.log('Location:', JSON.stringify(location));

    return (

        <Layout>
            <Content style={{ padding: '0 80px'}}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                
                    <div style={{ padding: 20, minHeight: 380 }}>

                        Setting 页面
                    </div>
                
                </Layout>
            </Content>
        </Layout>
        
    )
};

export default SettingPage;
