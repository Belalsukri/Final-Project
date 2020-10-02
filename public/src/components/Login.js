import React, { useState,useEffect} from 'react'
import PopupModal from './PopupModal'
import validator from 'validator';
import {loginPost} from '../services/api'
import {Link,useHistory} from 'react-router-dom'

const Login=(props)=>{
  

  const history = useHistory()
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
            history.push('/admin')
            //console.log('should be login');
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
    return(
<React.Fragment>
<PopupModal
        show={myState.entriesError}
        close={closeModal}
        className="bg-danger"
        title={myState.errorTitle}>
          {myState.errorElement}
        </PopupModal>
<div class="container register mb-5">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="./img/roboot.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <input type="submit" name="" value="Login"/><br/>
          </div>
          <div class="col-md-9 register-right">

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 class="register-heading">Login</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    
                    <div class="form-group">
                      <input type="email" class="form-control"
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
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" class="form-control"
                       placeholder="Password *"
                       required
                       onChange={(e) => {
                       setMyState({
                         ...myState,
                         password: e.target.value
                       })
                     }}
                       value={myState.password}/>
                    </div>
                    <button className="btn black" onClick={onLoginBtnClick}>Login</button>
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
export default Login