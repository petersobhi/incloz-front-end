import React from 'react';
import { Layout, Row, Col, Image, Typography, Card } from 'antd';
import { Button } from 'antd';
import { Carousel } from 'antd';
import './App.css';
import logo from './logo.svg';
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
      <Row>
        <Col span={8}>
          <img src={logo} className="app-logo" alt="Logo" />
        </Col>
        <Col span={16}>col-12</Col>
      </Row>
    </Header>
    <Content>
      <Carousel>
        <div className="cover">
          <Row>
            <Col span={12}>
              <Title>Incloz</Title>
              <Title level="2">h1. Ant Design</Title>
            </Col>
            <Col span={12}>col-12</Col>
          </Row>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
      </Carousel>
      <Card
        title="Create new order"
        bordered={false}
        style={{
          textAlign: 'center',
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <OrderForm />
      </Card>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;
