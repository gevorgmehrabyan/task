import React from 'react';
import './login.scss';
import { Form, Input, Button } from 'antd';

const Login = (props) => {
  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is Required!",
  };

  return (
    <Form
      name="login_form"
      validateMessages={validateMessages}
      onFinish={onFinish}
    >
      <Form.Item
        name='email'
        label="First Name"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input placeholder="Your Email"/>
      </Form.Item>
      <Form.Item

        name='password'
        label="Last Name"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}


export default Login