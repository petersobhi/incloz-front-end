import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Typography,
  Input,
} from 'antd';
import {
  UploadOutlined,
  InboxOutlined,
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';
const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
  wrapperCol: {
    span: 20,
  },
};

const suffixSelector = (
  <Form.Item name="suffix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="gram">g</Option>
      <Option value="kilogram">KG</Option>
    </Select>
  </Form.Item>
);

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const OrderForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Row>
        <br></br>
        <Col span={12}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Your name"
            />
          </Form.Item>
          <Form.Item
            name="pickupCity"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please select your country!',
              },
            ]}
          >
            <Select placeholder="Pickup city">
              <Option value="china">Alexandria</Option>
              <Option value="usa">Cairo</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pickupAddress"
            rules={[{ required: true, message: 'Please input your address' }]}
          >
            <Input
              prefix={<InboxOutlined className="site-form-item-icon" />}
              placeholder="Pickup Address"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone number"
            />
          </Form.Item>

          <Form.Item
            name="donation"
            rules={[
              { required: true, message: 'Please input estimated weight!' },
            ]}
          >
            <InputNumber
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Estimated weight"
              addonAfter={suffixSelector}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="customerName"
            rules={[
              { required: true, message: 'Please input your customer name!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Customer name"
            />
          </Form.Item>
          <Form.Item
            name="select"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please select your country!',
              },
            ]}
          >
            <Select placeholder="Delivery city">
              <Option value="china">Alexandria</Option>
              <Option value="usa">Cairo</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please input your address' }]}
          >
            <Input
              prefix={<InboxOutlined className="site-form-item-icon" />}
              placeholder="Delivery Address"
            />
          </Form.Item>
          <Form.Item
            name="customerPhoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input your customer phone number!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Customer Phone Number"
            />
          </Form.Item>

          <Form.Item
            name="orderCash"
            rules={[
              { required: true, message: 'Please input estimated weight!' },
            ]}
          >
            <InputNumber
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Order Cash"
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
