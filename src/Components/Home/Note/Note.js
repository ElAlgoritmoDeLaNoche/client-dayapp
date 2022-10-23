import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../../actions/notes'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'

const Note = ({ setSelectedId, note }) => {

  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const id = user?.result?._id

  return (
    <>
      {
        id === note.userId ? (
          <div className='grid-container'>
            <div
              className="grid-item"
              style={{ background: `#${note.color}` }}
              key={note._id}
            >
              <div className="content-text">
                <Link to={`/detail-note/${note._id}/${note.title}/${note.description}/${note.tags}/${note.color}/${note.postDate}`}>
                  <div className="content-title">
                    <h4>{note.title}</h4>
                    <div className="right-tag" style={{ background: '#fff', color: `#${note.color}` }}>{note.tags}</div>
                  </div>
                </Link>
                <p className="description">{note.description}</p>
                <div className="options">
                  <Button className='button-edit' onClick={() => { setSelectedId(note._id) }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button className='button-delete' onClick={() => dispatch(deleteNote(note._id))}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                  <div className="date">
                    {moment(note.postDate).fromNow()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'none' }}></div>
        )
      }
    </>
    // <div className='grid-container'>
    //   <div
    //     className="grid-item"
    //     style={{ background: `#${note.color}` }}
    //     key={note._id}
    //   >
    //     <div className="content-text">
    //       <Link to={`/detail-note/${note._id}/${note.title}/${note.description}/${note.tags}/${note.color}/${note.postDate}`}>
    //         <div className="content-title">
    //           <h4>{note.title}</h4>
    //           <div className="right-tag" style={{ background: '#fff', color: `#${note.color}` }}>{note.tags}</div>
    //         </div>
    //       </Link>
    //       <p className="description">{note.description}</p>
    //       <div className="options">
    //         <Button className='button-edit' onClick={() => { setSelectedId(note._id) }}>
    //           <i className="fa-solid fa-pen-to-square"></i>
    //         </Button>
    //         <Button className='button-delete' onClick={() => dispatch(deleteNote(note._id))}>
    //           <i className="fa-solid fa-trash"></i>
    //         </Button>
    //         <div className="date">
    //           {moment(note.postDate).fromNow()}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Note