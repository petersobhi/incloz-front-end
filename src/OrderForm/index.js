import React from 'react';
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
  Cascader,
  notification,
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
    span: 22,
  },
};

const residences = [
  {
    value: 'zhejiang',
    label: 'القاهرة',
    children: [
      {
        value: 'hangzhou',
        label: 'المعادي',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'الاسكندرية',
    children: [
      {
        value: 'nanjing',
        label: 'جليم',
      },
    ],
  },
];

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

export default class OrderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      governorates: [],
      value: '',
    };
  }

  componentDidMount() {
    fetch('https://be.incloz.com/api/governorates')
      .then((response) => response.json())
      .then((res) => this.setState({ governorates: res }));
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onFinish = async (values) => {
    values['delivery_address'] = {
      area: values.residence[1],
      street_name: values.street_name,
      building_name: values.building_name,
      floor_number: values.floor_number,
      apartment: values.apartment,
      notes: values.notes,
    };
    console.log('Received values of form: ', values);
    const rawResponse = await fetch('https://be.incloz.com/api/orders', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const content = await rawResponse.json();
    if (!rawResponse.ok && 'merchant' in content) {
      notification.error({
        message: 'كود تعريف غير صحيح',
      });
    }

    if (rawResponse.ok) {
      notification.success({
        message: '',
      });
    }
  };

  render() {
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={this.onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item
          label="كود التعريف"
          name="merchant"
          rules={[{ required: true, message: '' }]}
        >
          <Input />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item
              name="customer_name"
              rules={[{ required: true, message: '' }]}
            >
              <Input placeholder="أسم العميل" />
            </Form.Item>
            <Form.Item
              name="customer_phone_number"
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <Input placeholder="رقم تليفون العميل" />
            </Form.Item>

            <Form.Item name="customer_phone_number_alternate">
              <Input placeholder=" رقم تليفون العميل الاحطياطي" />
            </Form.Item>

            <Form.Item name="cash" rules={[{ required: true, message: '' }]}>
              <InputNumber
                placeholder="المبلغ المطلوب"
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              name="estimated_weight"
              rules={[{ required: true, message: '' }]}
            >
              <InputNumber
                placeholder="الوزن التقريبي (كيلوجرام)"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="residence"
              rules={[
                {
                  type: 'array',
                  required: true,
                  message: '',
                },
              ]}
            >
              <Cascader
                fieldNames={{
                  label: 'name_ar',
                  children: 'areas',
                  value: 'id',
                }}
                placement="bottomRight"
                options={this.state.governorates}
                placeholder="المحافظة \ المنطقة"
              />
            </Form.Item>
            <Form.Item
              name="street_name"
              rules={[{ required: true, message: '' }]}
            >
              <Input placeholder="الشارع" />
            </Form.Item>
            <Form.Item
              name="building_name"
              rules={[{ required: true, message: '' }]}
            >
              <Input placeholder="رقم / أسم المبني" />
            </Form.Item>

            <Form.Item
              name="floor_number"
              rules={[{ required: true, message: '' }]}
            >
              <InputNumber placeholder="الدور" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="apartment">
              <InputNumber placeholder="الشقة" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="notes">
              <Input placeholder="نقطة استدلال" />
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
            أنشء
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
