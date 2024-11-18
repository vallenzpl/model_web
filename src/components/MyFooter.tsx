import { Footer } from "antd/es/layout/layout";

const MyFooter: React.FC = () => (

    <Footer style={{ textAlign: 'center' }}>
        Ramdom Anythiny Go! ©{new Date().getFullYear()} Created by Shawn
    </Footer>

);

export default MyFooter;