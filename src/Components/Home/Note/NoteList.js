import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'

const NoteList = ({ selectedId, setSelectedId }) => {

  const notes = useSelector((state) => state.notes)

  return (
    <>
      {
        !notes.length ?
          (
            <div className='not-notes'>
              <h1>Sin notas por mostrar</h1>
            </div>
          ) : (
            <>
              {
                notes.map((note) => {
                  return (
                    <div key={note._id}>
                      <Note selectedId={selectedId} setSelectedId={setSelectedId} note={note} />
                    </div>
                  )
                })
              }
            </>
          )
      }
    </>
  )
}

export default NoteList