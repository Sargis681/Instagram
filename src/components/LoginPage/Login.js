import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import './Login.css'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser, usersData } = useSelector(selectUsers)
  const formRef = useRef(null)

  const loginSubmit = (e) => {
    e.preventDefault()
    const { login: { value: login }, password: { value: password } } = formRef.current
    dispatch(toggleCurrentUser({ login, password }))
    formRef.current.reset()
  }

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])


  return (
    <>
      <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src={`https://i.imgur.com/zqpwkLQ.png`} alt="" />
          </div>
          <form ref={formRef} onSubmit={loginSubmit} className="l-part">
            <input type="text" name='login' defaultValue={'bret'} placeholder="Username" className="input-1" />
            <div className="overlap-text">
              <input type="password" name='password' defaultValue={'gwenborough'} placeholder="Password" className="input-2" />
            </div>
            <button type="submit" className="log_btn" >Log in</button>
          </form>
          <div className="log_separator">
            <div className="log_line"></div>
            <p>OR</p>
            <div className="log_line"></div>
          </div>
          <div className="log_other">
            <button className="fb-login-btn" type="button">
              Log in with Facebook
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login