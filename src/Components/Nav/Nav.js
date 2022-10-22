import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button } from "antd";
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'

import './Nav.css'

let Sun, Moon

Sun = Moon = styled.svg`
  transition: all .5s linear
`

const Nav = ({ theme, toggleTheme }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const logout = () => {
    dispatch({ type: LOGOUT })
    navigate('/') // redirect to signup
    setUser(null);
  }

  return (
    <>
      {
        !user ? (
          <div></div>
        ) : (
          <div className='container-nav'>
            <div className='left'>
              <Link to='/home'>
                <h4 className='name'>{user?.result?.username}</h4>
              </Link>
            </div>
            <div className='right'>
              <div className='change-color-button'>
                <div onClick={toggleTheme}>
                  {theme === 'light' ? <Moon xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#212121' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-moon'><path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path></Moon>
                    :
                    <Sun xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sun'><circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line></Sun>}
                </div>
              </div>
              {/* <div className='button'>
                <Link to='/add-note'>
                  <button>
                    <i className='fas fa-pencil fa-ml'></i>
                  </button>
                </Link>
              </div> */}
              <div className='button'>
                <Button onClick={logout} htmlType='button'>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Nav