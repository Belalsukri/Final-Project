import React,{useEffect,useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {
  Card,  CardDeck,
} from 'reactstrap';

import {getMyRobotPost,deletePost} from '../services/api'

import ConfirmModal from './ConfirmModal'

const Robots = (props) => {
  const intialState={
    robots:[],
    confirmModalShow: false,
confirmModalElement: null,
confirmModalPayLoad: null
  }
  const [state,setState] = useState(intialState)

  const history =useHistory()
  useEffect(()=>{
    getMyRobotPost().then(data=>{
      
      switch (data) {
          case 10:
              history.push('/login')
              break;
              case 2:
                  console.log(('server error'));
                  break;
                 
          default:
              setState({...state,robots:data})
              break;
      }
      
      }).catch(error => {
        console.log(error);
      })
    }, [])
    const deletBtn =(robotId )=>{
     
      setState({
          ...state,
          confirmModalShow: true,
          confirmModalPayLoad: robotId,
          confirmModalElement: <p>I hope you know what you are doing , this robot gonna be deleted for ever</p>
        })
    }
    const closeCnfirmModal = () => {
      setState({
        ...state,
        confirmModalShow: false
      })
    }
    
    
  const deleteConferm =(robotId )=>{
    // console.log(robotId ,serial_number);
      deletePost(robotId ).then(dat=>{
          console.log(dat);
          switch (dat) {
              case 10:
                  history.push('/login')
                  break;
                  case 2:
                      console.log(('server error'));
                      break;
                     
              default:
                  const getRobots=[...state.robots]
                  getRobots.splice(getRobots.indexOf(getRobots.find (element=>element.id===robotId)),1)
                  console.log()
                  setState({
                   ...state,
                   robots:getRobots,
                   confirmModalShow: false
                 })
                  break;
          }
          
      })

  }

    const robotsElement = state.robots.map(robot => {
      return(
          <div key={robot.id} className="col-md-4 mb-4">
          <div className="item">
          <Link className="" to={"/Admin/ControlPanal/"}>
          <img className="robotimg mb-3" src='../img/os3.jpg' alt="img" />
          </Link>
           
            
            <h3>
              <Link to={"/Admin/ControlPanal/"+robot.name +'/'+ robot.id}>{robot.name}</Link>
            </h3>
            <h6>
              <Link className="btn btn-danger mt-3" to={"/Admin/EditRobot/"+robot.id}>Edit
              </Link>&nbsp;&nbsp;&nbsp;<button className="btn btn-danger mt-3" onClick={()=>{deletBtn(robot.id)}}  >Delete</button>
            </h6>
          </div>
        </div>
      )
  })
  
  return (
    <React.Fragment>
            <ConfirmModal  className="bg-danger"
        show={state.confirmModalShow}
        close={closeCnfirmModal}
        title="Confirm Delete"
        payload={state.confirmModalPayLoad}
        onConfirm ={deleteConferm}
        >
            {state.confirmModalElement}
        </ConfirmModal>
    <div className="container register mb-12">
    
    <CardDeck>
      <Card className='col-md-12'>
      <div className='row mt-3'>
      {robotsElement}
      </div>
        
        
      </Card>
     
      
    </CardDeck>
    
    </div>
    </React.Fragment>
  );
};

export default Robots;