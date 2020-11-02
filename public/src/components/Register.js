import React, { useState,useEffect } from 'react'
import validator from 'validator'
import { Link, useHistory  } from 'react-router-dom'
import { registerPost } from '../services/api'
import PopupModal from './PopupModal'

const Register = () => {
  const fnameRef =React.useRef()
  const lnameRef =React.useRef()
  const emailRef =React.useRef()
  const passwordlRef =React.useRef()
  const confirmpassword =React.useRef()
  const buttonRef =React.useRef()
  
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
    errorCompenent: null,
    showErrorModal: false,
    resultElement: null
  }
  useEffect(() => {
    fnameRef.current.focus()
  }, [])
  const [myState, setMyState] = useState(initialState)
const history =useHistory()
  const onRegisterBtnClick = (e) => {
    e.preventDefault()
    if (myState.fname.trim() === '' || myState.lname.trim() === '' || myState.email.trim() === '' || myState.password === '' || myState.password !== myState.confirmpassword || !validator.isEmail(myState.email.trim())) {
      const errorElement = (
        <ul>
          {myState.fname.trim() === '' ? <li>First Name should be not empty</li> : null}
          {myState.lname.trim() === '' ? <li>Last Name should be not empty</li> : null}
          {myState.email.trim() === '' ? <li>Email should be not empty</li> : null}
          {!validator.isEmail(myState.email.trim()) ? <li>you have to enter a valid email</li> : null}
          {myState.password === '' ? <li>Password should be not empty</li> : null}
          {myState.password !== myState.confirmpassword ? <li>Password is not matching the confirm password</li> : null}
        </ul>
      )
      setMyState({
        errorCompenent: errorElement,
        showErrorModal: true
      })

    } else {
      registerPost(myState.fname, myState.lname, myState.email, myState.password, myState.confirmpassword).then(data => {
        console.log(data);
        let badgClass = ''
        let badgMessage = ''

        switch (data) {
          case 1:
            badgClass = 'alert alert-success'
            badgMessage = 'you register succefully,youcan login now'
            history.push('/Login')
            break;
          case 2:
          case 4:
            badgClass = 'alert alert-danger'
            badgMessage = 'there was a server side error , pleasecontact the admin'
            break;
          case 3:
            badgClass = 'alert alert-danger'
            badgMessage = 'there is aledy a user with the same email , please choose another email'
            break;
          default:
            break;
        }
        const bange = (
          <div className={badgClass} role="alert">
            {badgMessage}
          </div>
        )
        setMyState({
          ...myState,
          resultElement: bange
        })
      }).catch(error => {
        console.log(error);
        const bange =(
          <div className="alert alert-success" role="alert">
            This is a success alert—check it out!

          </div>
      )
      setMyState({
        ...myState,
          resultElement :bange
      })
  
      })
    }
  }
  const closeModal = () => {
     
    setMyState({
      ...myState,
      showErrorModal: false
    })
}

const onFnameInput = (e) =>{
  if (e.key ==='Enter') {
    lnameRef.current.focus()
  }
}

const onlnameRefInput = (e) =>{
  if (e.key ==='Enter') {
    emailRef.current.focus()
  }
}

const onemailRefInput = (e) =>{
  if (e.key ==='Enter') {
    passwordlRef.current.focus()
  }
}

const onpasswordlRefInput = (e) =>{
  if (e.key ==='Enter') {
    confirmpassword.current.focus()
  }
}

const onconfirmpasswordInput = (e) =>{
  if (e.key ==='Enter') {
    buttonRef.current.focus()
  }
}

  return (
    <React.Fragment>
       <PopupModal show={myState.showErrorModal}
         close={closeModal}
          className="bg-danger"
           title="Entries Error">
            {myState.errorCompenent}
        </PopupModal>
      <div className="container register mb-5">
        <div className="row">
          <div className="col-md-3 register-left">
            
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>

            <Link className="btnReg " to='/Login' > Login </Link><br />
          </div>
          <div className="col-md-9 register-right">

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 className="register-heading">Sign up</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" 
                       onChange={(e) => { setMyState({ ...myState, fname: e.target.value }) }}
                       ref ={fnameRef} onKeyDown={onFnameInput}
                        placeholder="First Name *" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control"
                       onChange={(e) => { setMyState({ ...myState, lname: e.target.value }) }}
                       ref ={lnameRef} onKeyDown={onlnameRefInput}
                        placeholder="Last Name *" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control"
                       onChange={(e) => { setMyState({ ...myState, email: e.target.value }) }}
                       ref ={emailRef} onKeyDown={onemailRefInput}
                        placeholder="Your Email *" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="password" className="form-control"
                       onChange={(e) => { setMyState({ ...myState, password: e.target.value }) }}
                       ref ={passwordlRef} onKeyDown={onpasswordlRefInput}
                        placeholder="Password *" />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => { setMyState({ ...myState, confirmpassword: e.target.value }) }}
                        
                        ref ={confirmpassword} onKeyDown={onconfirmpasswordInput}
                        placeholder="Confirm Password *"
                      />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline mr-3 ">
                          <input type="radio" name="gender" value="male"  />
                          <span>
                            Male
                          </span>

                        </label>
                        <label className="radio inline">
                          <input type="radio" name="gender" value="female" />
                          <span>
                            Female
                          </span>
                        </label>
                      </div>
                    </div>
                    <button ref ={buttonRef} className="btnRegister" onClick={onRegisterBtnClick}>Register</button>
                    {/* <input type="submit"  value="Register"/> */}
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
export default Register