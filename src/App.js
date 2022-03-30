import React from 'react';
import { Layout, Row, Col, Image, Typography, Card } from 'antd';
import { Button } from 'antd';
import { Carousel } from 'antd';
import './App.css';
import logo from './logo.png';
import OrderForm from './OrderForm';

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => (
  <Layout>
    <Header>
      <img src={logo} className="app-logo" alt="Logo" />
    </Header>
    <Content>
      <Carousel>
        <div className="cover">
          <Card
            title="رفع طلب جديد"
            bordered={false}
            style={{
              textAlign: 'center',
              maxWidth: 700,
              marginLeft: 'auto',
              marginRight: 'auto',
              margin: '50px auto',
              opacity: 0.9,
              borderRadius: 20,
            }}
          >
            <OrderForm />
          </Card>
        </div>
      </Carousel>
    </Content>
    {/* <Footer>Footer</Footer> */}
  </Layout>
);

export default App;
