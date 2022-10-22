import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Card, Form, Input, Typography, Button } from 'antd'
import { createNote, updateNote } from '../../actions/notes'

import './AddNote.css'

const { Title } = Typography

const AddNote = ({ selectedId, setSelectedId }) => {

  const note = useSelector((state) => selectedId ? state.notes.find(note => note._id === selectedId) : null);

  const colors = [
    "9253A1",
    "F063a4",
    "2DC5F4",
    "FCEE21",
    "F16164",
    "70327E",
    "A42963",
    "0B6A88",
    "F89E4F",
    "EC015A",
    "D64F6E",
    "BE6A0C",
    "4D62C1",
    "CC5CBD",
    "D49C29",
  ]

  const [background, setBackground] = useState('#071415')
  const [current, setCurrent] = useState(null)

  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const user = JSON.parse(localStorage.getItem('profile'))
  const username = user?.result?.username

  const onSubmit = (formValues) => {
    selectedId ?
      dispatch(updateNote(selectedId, { ...formValues, username }))
      : dispatch(createNote({ ...formValues, username }));

    reset();
  };

  useEffect(() => {
    if (note) {
      form.setFieldsValue(note);
    }

    const timeoutId = setTimeout(() => {
      setCurrent(null)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [note, form, current]);

  const reset = () => {
    form.resetFields();
    setSelectedId(null);
  }

  if (!user) {
    return (
      <Card>
        <Title level={4}>
          <span>
            Welcome to Instaverse!
          </span> <br />
          <Link to="/signup">register</Link>  for sharing instant moments or ideas.
        </Title>
      </Card>
    );
  }

  return (
    <>
      <div className='container-content-note'>

        <div className="content-right-note">
          <div className="grid-container-note">
            <div className="grid-item-note" style={{ background: '#4F4B75' }}>
              <h1 className='title-note'>{selectedId ? "Editar Nota" : "Agregar Nueva Nota"}</h1>

              <Form
                form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                size="middle"
                onFinish={onSubmit}
              >
                <Form.Item
                  name="title" rules={[{ required: true }]} >
                  <Input placeholder="Titulo" />
                </Form.Item>

                <Form.Item
                  name="description" rules={[{ required: true }]} >
                  <Input.TextArea placeholder='Descripción' allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
                </Form.Item>

                <div className='area' style={{ background: background }}></div>
                {
                  current !== null && <h1 className='current'>Copiado {current}</h1>
                }
                <div className="contenedor">
                  {colors.map((color, index) => (
                    <div className="tarjeta" key={index}>
                      <div
                        style={{
                          background: `#${color}`,
                          filter: 'Brightness(85%)',
                          boxShadow: `#${color}` === background ? '0 0 5px #000' : ''
                        }}
                        className="box"
                        onClick={() => setBackground(`#${color}`)}
                      />
                      <CopyToClipboard text={`${color}`}>
                        <p style={{
                          color: `#${color}` === background ? '#ffffff' : `#${color}`
                        }} onClick={() => setCurrent(color)}>{`#${color}`}</p>
                      </CopyToClipboard>
                    </div>
                  ))}
                </div>

                <Form.Item
                  name="color" rules={[{ required: true }]} >
                  <Input placeholder='Pega el color copiado aquí #000' />
                </Form.Item>

                <Form.Item
                  name="tags" rules={[{ required: true }]} >
                  <Input placeholder='Tags' />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 16,
                    offset: 6
                  }}
                >
                  <Button
                    type="primary"
                    block
                    htmlType='submit'
                  >
                    {selectedId ? "Editar Nota" : "Agregar Nota"}
                  </Button>
                </Form.Item>
                {!selectedId ? null :
                  <Form.Item
                    wrapperCol={{
                      span: 16,
                      offset: 6
                    }}
                  >
                    <Button
                      type="primary"
                      block
                      htmlType='button'
                      danger
                      onClick={reset}
                    >
                      Cancelar
                    </Button>
                  </Form.Item>
                }

              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNote