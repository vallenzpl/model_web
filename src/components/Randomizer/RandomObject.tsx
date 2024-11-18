import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";


const RandomObject: React.FC = () => {

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    return (

        <Layout>
            <Content style={{ padding: '0 48px' }}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                
                    <div style={{ padding: 20, minHeight: 380 }}>

                        
                        Random Object GO !   

                    </div>
                
                </Layout>
            </Content>
        </Layout>
        
    )
};

export default RandomObject;

