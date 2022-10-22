import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNotes } from '../../actions/notes'
import AddNote from '../AddNote/AddNote'
import NoteList from './Note/NoteList'
// import SideList from './Sidebar/SideList'

import './Home.css'

const Home = () => {

  const [selectedId, setSelectedId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <>
      <div className="container-content">
        <div className='container-content-sidebar'>
          {/* <SideList selectedId={selectedId} setSelectedId={setSelectedId} /> */}
          <AddNote selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
        <div className="container-content-item">
          <NoteList setSelectedId={setSelectedId} />
        </div>
        {/* <div className="container-content-add">
          <AddNote selectedId={selectedId} setSelectedId={setSelectedId} />
        </div> */}
      </div>
    </>
  )
}

export default Home