

import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Card, CardDeck
} from 'reactstrap';


const Admin=(props)=> {
  const history = useHistory()

   
  console.log(props);
    return (
      <React.Fragment>
      <div className="container register mb-12 d-flex justify-content-center">
    <CardDeck className='col-md-10'>
      <Card className='col-md-12 '>
        <div className='row mt-3'>
        <section className="col-md-12">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="row col-md-8 mb-5 ml-4 justify-content-center">
          <h3>Welcome {props.user.email}</h3>
          <div className=' row mt-4 btn btn-primary col-6 radius d-flex justify-content-center '>
          <Link className='text-white col-8 ' to="/admin/AddRobot">Add Robots</Link>
          </div >
          <br/>
         <div className='row mt-4 btn btn-primary col-6 radius  justify-content-center'> 
         <Link className='text-white col-8 ' to="/admin/Robots">Robots</Link>
         </div>
         <br/>
         
        </div>
      </div>
    </div>
  </section>
        </div>   
      </Card>  
    </CardDeck>   
      </div>
  </React.Fragment>

     
    )
}
const mapStateToProps =(state)=>{
  return{user:state.user}
}  
export default connect(mapStateToProps)(Admin) 
