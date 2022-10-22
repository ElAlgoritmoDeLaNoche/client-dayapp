import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'

const SideList = ({ setSelectedId }) => {

  const notes = useSelector((state) => state.notes)

  return (
    <>
      {
        !notes.length ?
          (
            <div className='not-notes'>
              <h1>Sin listas por mostrar</h1>
            </div>
          ) : (
            <>
              {notes.map((note) => {
                return (
                  <Sidebar key={note._id} setSelectedId={setSelectedId} note={note} />
                )
              })}
            </>
          )
      }
    </>
  )
}

export default SideList