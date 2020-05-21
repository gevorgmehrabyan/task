import React from 'react';
import './forgot.scss';
import { Button, Form, Input } from 'antd';

const ForgotPassword  = () => {
  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is Required!",
  };

  return (
    <Form
      name="reset_form"
      validateMessages={validateMessages}
      onFinish={onFinish}
    >
      <Form.Item
        name='email'
        label="Email"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          SEND RESET LINK
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ForgotPassword;