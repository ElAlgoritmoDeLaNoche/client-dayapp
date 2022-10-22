import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
import './DetailNote.css'

const DetailNote = () => {

  const { id, title, description, tags, color, postDate } = useParams()

  return (
    <div className='grid-container-detail'>
      <div
        className="grid-item"
        style={{ background: `#${color}` }}
        key={id}
      >
        <div className="content-text">
          <div className="content-title">
            <h4>{title}</h4>
            <div className="right-tag" style={{ background: '#fff', color: `#${color}` }}>{tags}</div>
          </div>
          <p className="description-detail">{description}</p>
          <div className="options">
            <div className="date">
              {moment(postDate).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailNote