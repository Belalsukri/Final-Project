

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
        <div class="container register mb-5">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="./img/roboot.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            
          </div>
          <div class="col-md-9 register-right   ">

            <div class="tab-content d-flex justify-content-center" id="myTabContent">
              <div
                class="tab-pane fade show active col-12"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <h3 class="register-heading">Edit Name</h3>
                <div class="row register-form  d-flex justify-content-center">
                  <div class="col-md-9" >
                    
                    <div class="form-group col-12">
                      <input type="email" class="form-control"
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
