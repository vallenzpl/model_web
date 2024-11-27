import { Button, Descriptions, Empty, Flex, Layout, Spin, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";


const RandomPokemon: React.FC = () => {

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const [show, setShow] = useState(false);

    const loadingContent = "Just a moment...";

    const onClickForRandom = ()=>{
        setShow(true);

        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => {
            console.log('获取到poke: '+ response.json())
            setShow(false);
        })
        .catch(error => {
            console.error('Error fetching data: ', error)
            setShow(false);
        });
    }



    return (

         <Layout>
            <Content style={{ padding: '0 80px'}}>
                <Layout style={{ padding: '10px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                
                    <div style={{ padding: 20, minHeight: 380 }}>

                        <Empty />;

                            {/* {items.length>0? <Descriptions  title="Country Info" layout="vertical" bordered items={items} />:<></>} */}
                        {/* <Flex align="center" justify="center" vertical={true} gap="large">
                            <Button type="primary" style={{width: 220, height: 40}} onClick={onClickForRandom}>Random Pokémon, here we go! </Button>
                            <Spin spinning={show} tip={loadingContent}></Spin>

                        </Flex> */}
                    </div>
                
                </Layout>
            </Content>
        </Layout>
        
    )
};

export default RandomPokemon;

