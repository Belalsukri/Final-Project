import React, { useState,useEffect} from 'react'
import PopupModal from './PopupModal'

import {loginPost} from '../services/api'
import {useHistory} from 'react-router-dom'
import{setUserAction} from '../actions'
import {connect} from 'react-redux'

const Login=(props)=>{
  useEffect(()=>{
    props.setUserAction(null)
  },[])
 
  
console.log(props);
  const history = useHistory()
  console.log(history);
  const emailRef =React.useRef()
  const passwordRef =React.useRef()
  const buttonRef =React.useRef()
  useEffect(()=>{
    history.location.state=true
    emailRef.current.focus()
  },[])
  const intialState = {
    email: '',
    password: '',
    entriesError: false,
    errorElement: null,
    errorTitle: ''
  }
  const [myState, setMyState] = useState(intialState)

  const onLoginBtnClick = (e) => {
    e.preventDefault()
    if (myState.email.trim() === '' || myState.password === '') {
      const errorElement = (
        <ul>
          {myState
            .email
            .trim() === ''
            ? <li>Email should not be empty</li>
            : null}
          {myState.password === ''
            ? <li>Password should not be empty</li>
            : null}
        </ul>
      )
      setMyState({
        ...myState,
        entriesError: true,
        errorElement,
        errorTitle: 'Entries Error'
      })
    } else {
      loginPost(myState.email, myState.password).then(data => {
        console.log(data);
      //  history.push('/admin')
        switch (data) {
          case 2:
            setMyState({... myState, entriesError: true, errorElement: <p>there was a server error</p>, errorTitle: 'Server Error' })
            break;
          case 3:
            setMyState({... myState, entriesError: true, errorElement: <p>Password is wrong</p>, errorTitle: 'Wrong password' })
            break;
          case 4:
            setMyState({... myState, entriesError: true, errorElement: <p>the email that you used is not exist</p>, errorTitle: 'Email not exist' })
            break;
          case 1:
            // show admin panel
            
            props.setUserAction(myState.email)
            history.push('/Admin')
            console.log('should be login');
            break;
        
          default:
            break;
        }
      }).catch(error => {
        setMyState({... myState, entriesError: true, errorElement: <p>can not send the data</p>, errorTitle: 'unknown error' })
      })
    }
  }
  const closeModal = () => {
    setMyState({
      ...myState,
      entriesError: false
    })
  }
  const onFirstInput = (e) =>{
    if (e.key ==='Enter') {
      passwordRef.current.focus()
    }
      }
    const onLastInput = (e) =>{
      if (e.key ==='Enter') {
        buttonRef.current.focus()
      }
    }
    return(
<React.Fragment>
<PopupModal
        show={myState.entriesError}
        close={closeModal}
        className="bg-danger"
        title={myState.errorTitle}>
          {myState.errorElement}
        </PopupModal>
<div className="container register mb-5">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="./img/roboot.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            
          </div>
          <div className="col-md-9 register-right">

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 className="register-heading">Login</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    
                    <div className="form-group">
                      <input type="email" className="form-control"
                      ref ={emailRef} onKeyDown={onFirstInput}
                       placeholder="Your Email *"
                       required
                       onChange={(e) => {
                       setMyState({
                         ...myState,
                         email: e.target.value
                       })
                     }}
                        value={myState.email}/>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="password" className="form-control"
                       placeholder="Password *"
                       ref={passwordRef}  onKeyDown={onLastInput}
                       required
                       onChange={(e) => {
                       setMyState({
                         ...myState,
                         password: e.target.value
                       })
                     }}
                       value={myState.password}/>
                    </div>
                    <a className="text-danger " href="/ForgotPassword"> Forgot Password?</a>
                    <button ref ={buttonRef} className="btnRegister" onClick={onLoginBtnClick}>Login</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

</React.Fragment>
    )
}
export default connect(null,{setUserAction})(Login) 