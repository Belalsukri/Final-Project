import React, { useState, useEffect } from 'react'
import PopupModal from './PopupModal'
import {Link} from 'react-router-dom'

import { loginPost } from '../services/api'
import { useHistory } from 'react-router-dom'
import { setUserAction } from '../actions'
import { connect } from 'react-redux'

const Login = (props) => {
 


  //console.log(props);
  const history = useHistory()
  //console.log(history);
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const buttonRef = React.useRef()
  useEffect(() => {
    //history.location.state=true
    props.setUserAction(null)
    emailRef.current.focus()
  }, [])
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
            setMyState({ ...myState, entriesError: true, errorElement: <p>there was a server error</p>, errorTitle: 'Server Error' })
            break;
          case 3:
            setMyState({ ...myState, entriesError: true, errorElement: <p>Password is wrong</p>, errorTitle: 'Wrong password' })
            break;
          case 4:
            setMyState({ ...myState, entriesError: true, errorElement: <p>the email that you used is not exist</p>, errorTitle: 'Email not exist' })
            break;
          default:
            // show admin panel

            props.setUserAction(data)
            history.push('/Admin')
            console.log('should be login');
            break;

        }
      }).catch(error => {
        setMyState({ ...myState, entriesError: true, errorElement: <p>can not send the data</p>, errorTitle: 'unknown error' })
      })
    }
  }
  const closeModal = () => {
    setMyState({
      ...myState,
      entriesError: false
    })
  }
  const onFirstInput = (e) => {
    if (e.key === 'Enter') {
      passwordRef.current.focus()
    }
  }
  const onLastInput = (e) => {
    if (e.key === 'Enter') {
      buttonRef.current.focus()
    }
  }
  return (
    <React.Fragment>
      <PopupModal
        show={myState.entriesError}
        close={closeModal}
        className="bg-danger"
        title={myState.errorTitle}>
        {myState.errorElement}
      </PopupModal>
      <section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content-1 col-lg-12">
							<h1 className="text-white">
								Login				
							</h1>	
							<p className="text-white link-nav"><Link to="/">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/Login">Login</Link></p>
						</div>	
					</div>
				</div>
			</section>
      <div className="container register mb-5">
        <div className="row">
          <div className="col-md-3 register-left">

            <h3>Welcome</h3>
            <p>If you are not registered yet you can cklick register buttom</p>
            <Link className="btnReg " to='/Register' > Register </Link><br />

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
                        ref={emailRef} onKeyDown={onFirstInput}
                        placeholder="Your Email *"
                        required
                        onChange={(e) => {
                          setMyState({
                            ...myState,
                            email: e.target.value
                          })
                        }}
                        value={myState.email} />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="password" className="form-control"
                        placeholder="Password *"
                        ref={passwordRef} onKeyDown={onLastInput}
                        required
                        onChange={(e) => {
                          setMyState({
                            ...myState,
                            password: e.target.value
                          })
                        }}
                        value={myState.password} />
                    </div>
                    <a className="text-danger " href="/ForgotPassword"> Forgot Password?</a>
                    <button ref={buttonRef} className="btnRegister" onClick={onLoginBtnClick}>Login</button>
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
export default connect(null, { setUserAction })(Login) 