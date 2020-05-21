import React from 'react';
import './signUp.scss';
import footerEmail from '../../assets/images/icons/footerEmail.png';
import { Button, Form, Input } from 'antd';

const SignUp = () => {
  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is Required!",
  };
  return(
    <div className='sign_up '>
      <div className='container space_between'>
        <div className='subscribe_info'>
          <img src={footerEmail} alt='email' />
          <div>
            <h2>Subscribe</h2>
            <p>Sign up with your email address to receive news and updates.</p>
          </div>
        </div>
        <Form
          name="sign_up_form"
          validateMessages={validateMessages}
          onFinish={onFinish}
          className='sign_up_form'
        >
          <Form.Item
            name='email'
            label="Email"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input
              placeholder="youremail@domain.com"
            />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignUp;