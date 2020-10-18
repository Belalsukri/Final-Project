

import React,{useState} from 'react'
import {updateRobotPost} from '../services/api'
import {useHistory} from 'react-router-dom'

const EditRobot = () =>{

    const intialState = {
       robot: null,
       
      }
      const history = useHistory()
      const [myState, setMyState] = useState(intialState)
      const inbutName=(e)=>{
        setMyState({
            ...myState,
            robot: e.target.value
          })
      }
    //   console.log(robot);
      const onLoginBtnClick = (e) => {
        e.preventDefault()
        updateRobotPost(myState.robot).then(data=>{
            console.log(data);
            if(data===1){
                history.push('/admin/Robots')
            }
        })

      }

    return (
        <div className="container register mb-5">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="./img/roboot.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            
          </div>
          <div className="col-md-9 register-right   ">

            <div className="tab-content d-flex justify-content-center " id="myTabContent">
              <div
                className="tab-pane fade show active col-12"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 className="register-heading">Edit Name</h3>
                <div className="row register-form  d-flex justify-content-center">
                  <div className="col-md-9" >
                    
                    <div className="form-group col-12">
                      <input type="email" className="form-control"
                       placeholder="Robot New Name *"
                       required
                       onChange={ inbutName}
                        value={myState.robot}/>
                    </div>
                    <button className="btnRegister col-4" onClick={onLoginBtnClick}>Add</button>
                  </div>
                  
                    
                  
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
}
export default EditRobot
