import Icon, { CommentOutlined, CompassOutlined, FlagOutlined, HomeOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { Breadcrumb, ConfigProvider, Flex, Image, Layout, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
import logo7 from '../assets/images/logo7.png'
import logo8 from '../assets/images/logo8.png'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  

const menuItems: any[] = 
[
    getItem('Home', '0', <HomeOutlined />),
    getItem('PickerWheel', '1', <CompassOutlined />),
    getItem('Randomizer', '2', <FlagOutlined />, [
        getItem('RandomCountry', '20'),
        getItem('RandomPokemon', '21' ),
        // getItem('RandomNFL', '22'),
        
    ]),
    getItem('About', '3', <TeamOutlined />)
];


const NavBar: React.FC = () => {

    const params = useParams();
    const location = useLocation();
    
    const [current, setCurrent] = useState(findKeyByPath(location['pathname']));
    const [curentBC, setCurrentBC] = useState('Home');
    const navigate = useNavigate();

    useEffect(() => {
        let path = location['pathname'];
        let cur = findKeyByPath(path);
        console.log('path='+path+", cur="+cur)
        setCurrent(cur)
        // setCurrent(findKeyByPath(location['pathname']));
    }, [location]);


    function findKeyByPath(path: string){

        let pathArray: string[] = path.split('/').filter((item)=> item!='');
        // console.log('--->path array:'+pathArray);
        let pSize = pathArray.length;

        if(menuItems){
            let i = 0;
            for(let item of menuItems){
                // console.log(`第${i++}: ${JSON.stringify(item)}, ${item?item["label"]:''} `)
                if(item && i<pSize && item.label){
                    if(item.label.toLowerCase() === (pathArray[i]).toLowerCase()){
                        if(i == pSize-1){
                            return item.key;
                        }else if(item.children && item.children.length>0){
                            //目前只有path两级，再多，再改
                            ++i;
                            for(let childItem of item.children){
                                if(childItem.label && childItem.label === pathArray[i]){
                                    return childItem.key;
                                }
                            }
                        }
                    }
                }
                
            }

        }
        return '0';
    }


    // const bcItems = [
    //     {
    //         // href: '',
    //         title: (
    //           <>
    //             <HomeOutlined onClick={backToHome}/>
    //             <span style={{ padding: '0 5' }}>{curentBC}</span>
    //           </>
    //         )
    //     }
    //   ]


    function backToHome(){
        setCurrent('0')
        navigate('/home')
    }      

    function findLabel(key: string, items: any[], prePath: string = ''){
        let lab = '';
        if(!key || !items || items.length === 0) return lab;
        
        for(let item of items){
            if(item){
                if(item.key === key){
                    return prePath + '/' + item.label;
                }else if(item.children?.length > 0){
                    lab = findLabel(key, item.children, item.label);
                    if(lab !== ''){
                        return prePath + '/' + lab;
                    }
                }
            }
        }
        return lab;
    }

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key);

        let lab = findLabel(e.key, menuItems);
        console.log('找到的lab= ', lab);

        navigate(lab);

        setCurrentBC(lab)

    };

    return (

        <Layout>
            <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} onClick={backToHome}>
                <img src={logo7} width={50} height={50}/>
                <p style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 10}} >Random Anythiny Go</p>
            </div>

{/* 
            <Flex vertical={false} justify="center" align="center">
            </Flex> */}
            
            <ConfigProvider
                theme={{
                    components: {
                    Menu: {
                        iconSize : 20,
                        groupTitleFontSize : 16
                    },
                    },
                }}
                >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick={onClick}
                    defaultSelectedKeys={['0']}
                    selectedKeys={[current]}
                    items={menuItems}
                    style={{ flex: 1, minWidth: 0 , fontSize: 16, fontWeight: 'bold', display: "flex", justifyContent:"flex-end",marginRight:100}}
            />
            </ConfigProvider>
            
            
            </Header>
    
            {/* <Breadcrumb separator=">" style={{ margin: "10px 48px" }}  items ={bcItems} /> */}
            
            <div style={{ margin: "10px 48px" }} ></div>
    
        </Layout>
    
    );


}
    

export default NavBar;