import React from 'react';
import { Form, Input, Button } from 'antd';


const LoginForm = () => {
  const onFinish = (values) => {
    alert(`Email: ${values.email}\nPassword: ${values.password}`);
  };

  return (
    <div style={{ padding: '16px', maxWidth: '300px', margin: '0 auto' }}>
      <Form name="login-form" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
};

export default App;