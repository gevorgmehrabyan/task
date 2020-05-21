import React from 'react';
import './reset.scss';
import { Form, Input, Button } from 'antd';

const ResetPassword  = () => {
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
        name='password'
        label="Last Name"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        label="Password Confirmation"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ResetPassword;