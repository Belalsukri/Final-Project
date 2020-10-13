import React,{useState} from 'react'
import PopUpModal from './PopupModal'
import {useHistory} from 'react-router-dom'
import {AddRobotPost} from '../services/api'

 const AddRobot =()=> {
  const history = useHistory()
  const intialState = {
    Type: '',
    SerialNumber: '',
    entriesError: false,
    errorElement: null,
    errorTitle: ''
  }
  const [myState, setMyState] = useState(intialState)

  const onRegisterBtnClick = (e) => {
    e.preventDefault()
    if (myState.Type.trim() === '' || myState.SerialNumber === '') {
      const errorElement = (
        <ul>
          {myState
            .Type
            .trim() === ''
            ? <li>Type should not be empty</li>
            : null}
          {myState.SerialNumber === ''
            ? <li>SerialNumber should not be empty</li>
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
      AddRobotPost(myState.Type, myState.SerialNumber).then(data => {
        console.log(data);
      //  history.push('/admin')
        switch (data) {
          case 3:
            setMyState({... myState, entriesError: true, errorElement: <p>there was a server error</p>, errorTitle: 'Server Error' })
            break;
          case 5:
            setMyState({... myState, entriesError: true, errorElement: <p>SerialNumber is not exist</p>, errorTitle: 'Wrong SerialNumber' })
            break;
          case 4:
            setMyState({... myState, entriesError: true, errorElement: <p>the SerialNumber that you used is not exist</p>, errorTitle: 'SerialNumber not exist' })
            break;
            case 2:
              setMyState({... myState, entriesError: true, errorElement: <p>missing entries</p>, errorTitle: 'you miss some intries' })
              break;
          case 1:
            // show admin panel
           // props.setUserAction(myState.email)
            history.push('/Admin/Robots')
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

   
        return (
          <React.Fragment>
            <PopUpModal  show={myState.entriesError}
        close={closeModal}
        className="bg-danger"
        title={myState.errorTitle}>
          {myState.errorElement}
        </PopUpModal>
      <div className="container register">
        <div className="row ">
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
                <h3 className="register-heading">Add Robot</h3>
                <div className="row register-form d-flex justify-content-center
">
                  <div className="col-md-9">
                    
                    <div className="form-group">
                      <input type="text" className="form-control"  placeholder="Type *"
                      onChange={(e) => {setMyState({...myState, Type: e.target.value})}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control"  placeholder="Serial Number *" 
                      onChange={(e) => {setMyState({...myState, SerialNumber: e.target.value})}}/>
                    </div>
                    <div>
                    <button className="btnRegister"  onClick={onRegisterBtnClick}>Add</button>
                    </div>

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
export default AddRobot