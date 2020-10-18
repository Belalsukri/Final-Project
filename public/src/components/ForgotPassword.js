import React,{useState} from 'react'

import PopupModal from './PopupModal'
import {ForgetPasswordPost} from '../services/api'
import {useHistory} from 'react-router-dom'


const ForgotPassword = () => {
  const intialState = {
    email: '',
    entriesError: false,
    errorElement: null,
    errorTitle: ''
  }
  const [myState, setMyState] = useState(intialState)
  const history=useHistory()
  const onLoginBtnClick = (e) => {
    e.preventDefault()
    if (myState.email.trim() === '' ) {
      const errorElement = (
        <ul>
          {myState.email.trim() === ''
            ? <li>Email should not be empty</li>
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
      ForgetPasswordPost(myState.email).then(data => {
        console.log(data);
      //  history.push('/admin')
        switch (data) {
          case 2:
            setMyState({... myState, entriesError: true, errorElement: <p>no accent with email address exsts</p>, errorTitle: "missing ertries" })
            break;
          case 3:
            setMyState({... myState, entriesError: true, errorElement: <p>Either the email not exsist</p>, errorTitle: "Email Error" })
            break;
          case 4:
            setMyState({... myState, entriesError: true, errorElement: <p>Something unexpected happened. please contact the system Adminstrator</p>, errorTitle: "Server Error" })
            break;
          case 1:
            // show admin panel
           // props.setUserAction(myState.email)
           setMyState({... myState, entriesError: true, errorElement: <p>you can check your Email...</p>, errorTitle: "Register Success" })
            history.push('/login')
            console.log(history);
            console.log('should be login');
            break;
        
          default:
            break;
        }
      }).catch(error => {
        setMyState({... myState, entriesError: true, errorElement: <p>"error on getting data", 'please contact the Administrator'</p>, errorTitle: 'unknown error' })
      })
    }
  }
  const closeModal = () => {
    setMyState({
      ...myState,
      entriesError: false
    })
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
    <div className="container register mb-5">
        <div className="row">
          <div className="col-md-3 register-left ">
            <img src="./img/roboot.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            
          </div>
          <div className="col-md-9 register-right ">

            <div className="tab-content " id="myTabContent ">
              <div
                className="tab-pane fade show active"
                
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 className="register-heading">Forgot Password</h3>
                <div className="row register-form d-flex justify-content-center">
                  <div className="col-md-8 ">
                    
                    
                      <input type="email" className="form-control d-flex justify-content-center  "
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
                  <div className='col-md-10 d-flex justify-content-center'>
                  <button className="col-md-4 btnRegister" onClick={onLoginBtnClick}>Send</button>
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

export default ForgotPassword



