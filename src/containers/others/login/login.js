import React from 'react';
import './login.scss';
import { Form, Input, Button } from 'antd';
import passIcon from '../../../assets/images/icons/passIcon.png';
import emailInput from '../../../assets/images/icons/emailInput.png';

const Login = (props) => {
  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is Required!",
  };

  return (
    <div className='container'>
      <Form
        name="login_form"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
          label="Email"
          rules={[{ required: true }]}
          hasFeedback
        >
          <Input
            placeholder="Your Email"
            suffix={<img src={emailInput} alt='email'/>}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label="Password"
          rules={[{ required: true }]}
          hasFeedback
        >
          <Input
            placeholder="Password"
            suffix={<img src={passIcon} alt='password'/>}
          />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}


export default Login