import React from 'react'

const Sidebar = ({ note }) => {
  return (
    <div className="divider" key={note._id}>
      <div className="dot" style={{ background: `${note.color}` }}>
        <div className="left-tag">{note.tags}</div>
      </div>
      <div className="badge" style={{ background: `${note.color}` }}>1</div>
    </div>
  )
}

export default Sidebar