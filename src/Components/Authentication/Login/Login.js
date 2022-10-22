import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Layout, Typography } from "antd";
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/authentication'

const Login = () => {

  const { Title } = Typography

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  const onSubmit = (formValues) => {
    dispatch(login(formValues, navigate))
  }

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Layout>
        <Card
          title={
            <Title level={4} style={{ textAlign: "center" }}>
              Iniciar Sesión
            </Title>
          }
        >
          <Form
            name="authform"
            form={form}
            size="large"
            wrapperCol={{ span: 20, offset: 2 }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Ingresa un correo"
                }
              ]}
            >
              <Input type="email" placeholder="email address" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingresa una contraseña"
                }
              ]}
            >
              <Input.Password type="password" placeholder="Contraseña" />
            </Form.Item>
            <Form.Item>
              <Button className='signup' htmlType='submit' typeof='primary'>
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>
          <Link className='have-an-account' to='/'>¿No tienes cuenta? Crea una</Link>
        </Card>
      </Layout>
    </>
  )
}

export default Login