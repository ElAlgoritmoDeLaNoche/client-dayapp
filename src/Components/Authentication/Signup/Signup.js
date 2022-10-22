import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Layout, Typography } from "antd";
import { useDispatch } from 'react-redux';
import { signup } from '../../../actions/authentication'

import '../Styles.css'

const Signup = () => {

  const { Title } = Typography

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  const onSubmit = (formValues) => {
    dispatch(signup(formValues, navigate))
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
              Registrarse
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Ingresa un nombre de usuario"
                }
              ]}
            >
              <Input placeholder="Nombre de usuario" />
            </Form.Item>
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
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Repite la contraseña"
                }
              ]}
            >
              <Input.Password type="password" placeholder="Confirmar contraseña" />
            </Form.Item>
            <Form.Item>
              <Button className='signup' htmlType='submit' typeof='primary'>
                Registrar Ahora
              </Button>
            </Form.Item>
          </Form>
          <Link className='have-an-account' to='/login'>¿Ya tienes cuenta? Inicia Sesión</Link>
        </Card>
      </Layout>
    </>
  )
}

export default Signup