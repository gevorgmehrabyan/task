import React from 'react';
import './candidateRegistration.scss';
import '../../../assets/globals/upload.scss';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const CandidateRegistration = (props) => {
  const handleDrop = acceptedFiles => {
  };

  const handleDelete = (id) => {
  };

  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is Required!",
  };

  return (
    <div className='container'>
      <Form
        name="candidate_registration_form"
        validateMessages={validateMessages}
        onFinish={onFinish}
        className='space_between'
      >
        <div className='left_register'>
          <Form.Item
            name='firstName'
            label="First Name"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name='email'
            label="Email"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name='password'
            label="Password"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            label="Confirm Password"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            name='industryInterested'
            label="Industry Interested"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Select defaultValue="1" >
              <Option value="1">Industry Interested</Option>
              <Option value="2">Programming</Option>
              <Option value="3">UI/UX</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='highDeagree'
            label="High Degree"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Select defaultValue="1" >
              <Option value="1">Highest Degree Earned</Option>
              <Option value="2">Automation Technologies</Option>
              <Option value="3">Technical Support</Option>
            </Select>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              CREATE ACCOUNT
            </Button>
          </Form.Item>
        </div>
        <div className='right_register'>
          <Form.Item
            name='lastName'
            label="Last Name"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name='school'
            label="School"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Select defaultValue="1" >
              <Option value="1">School</Option>
              <Option value="2">Standford</Option>
              <Option value="3">Harvard</Option>
            </Select>
          </Form.Item>

        </div>
      </Form>
    </div>
  );
};

export default CandidateRegistration;

// <div className='upload_drop'>
//   <h2>Upload Your Resume</h2>
//   <div className='upload_column'>
//     <Dropzone onDrop={handleDrop}>
//       {({ getRootProps, getInputProps }) => (
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <img src={uploadFile} alt='upload_file'/>
//           <span>Drag and Drop file</span>
//           <div className="upload-btn-wrapper">
//             <button type='button' className="btn">Choose File</button>
//             <input type="button" name="myfile"/>
//           </div>
//         </div>
//       )}
//     </Dropzone>
//     {
//       resume.map((item, id) => (
//         <div key={id} className='simple_file'>
//           <img src={file} alt='file'/>
//           <div className='name_wrap'>
//             <label>{item.name}</label>
//             <span>{item.size}KB</span>
//           </div>
//           <div onClick={() => handleDelete(id)}><img src={close} alt='delete'/></div>
//         </div>
//       ))}
//   </div>
// </div>
