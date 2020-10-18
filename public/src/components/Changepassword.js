import React,{useState ,useEffect} from 'react'
import {ubdatePasswordPost , getMyRobotPost} from '../services/api'
import {useHistory} from 'react-router-dom'
import PopupModal from './PopupModal'

const Changepassword = (props) => {

   
        const intialState = {
            robots:[],
          password : '',
          repassword : '',
          entriesError: false,
          errorElement: null,
          errorTitle: ''
        }
        const [myState, setMyState] = useState(intialState)
        const history = useHistory()
       // console.log(props.match.params.id);
       // console.log(props);
        useEffect(()=>{
            getMyRobotPost().then(data=>{
                    setMyState({...myState,robots:data})
              })
              
             
            }, [])
        const onLoginBtnClick = (e)=>{
            e.preventDefault()
            if (myState.password.trim() === '' || myState.repassword.trim() === ''  ){
                const errorElement = (
                    <ul>
                    {myState.password.trim() === ''
                        ? <li>password should not be empty</li>
                        : null}
                    {myState.repassword === ''
                        ? <li>rePassword should not be empty</li>
                        : null}
                        {myState.password != myState.repassword
                        ? <li>Password is not matching the confirm password</li>
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
                ubdatePasswordPost(myState.password , props.match.params.id).then(data => {
                  console.log(data);
                //  history.push('/admin')
                  switch (data) {
                    case 2:
                      setMyState({... myState, entriesError: true, errorElement: <p>invalid url error</p>, errorTitle: 'Link Expaired' })
                      break;
                    case 3:
                      setMyState({... myState, entriesError: true, errorElement: <p>update failed</p>, errorTitle: 'Server Error' })
                      break;
                    case 4:
                      setMyState({... myState, entriesError: true, errorElement:  <p>there was a server error</p>, errorTitle: 'Server Error' })
                      break;
                    case 1:
                      // show admin panel
                     // props.setUserAction(myState.email)
                      history.push('/login')
                     
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
                    
                    
                      <input type="password" className="form-control d-flex justify-content-center  "
                       placeholder="new password*"
                       required
                       onChange={(e) => {
                       setMyState({
                         ...myState,
                         password: e.target.value
                       })
                     }}
                        value={myState.password}/>

                    <input type="password" className="form-control d-flex justify-content-center  "
                       placeholder="repassword*"
                       required
                       onChange={(e) => {
                       setMyState({
                         ...myState,
                         repassword: e.target.value
                       })
                     }}
                        value={myState.repassword}/>
                    

                  </div>
                  <div className='col-md-10 d-flex justify-content-center'>
                  <button className="col-md-4 btnRegister" onClick={onLoginBtnClick}>Reset Password</button>
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

export default Changepassword
