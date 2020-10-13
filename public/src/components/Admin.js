

import React from 'react'
import {Link} from 'react-router-dom'

import {
  Card, CardDeck
} from 'reactstrap';


const Admin=(props)=> {

   
  console.log(props);
    return (
      <React.Fragment>
      <div className="container register mb-12 d-flex justify-content-center">
    <CardDeck className='col-md-10'>
      <Card className='col-md-12 '>
        <div className='row mt-3'>
        <section className="slider">
    <div className="container">
      <div className="row ">
        <div className="row col-md-10 mb-5 ml-4 justify-content-center">
          <h3>Welcome {props.location.state}</h3>
          <div className='row mt-4 btn btn-primary col-6 radius d-flex justify-content-center'>
          <Link className='text-white col-4' to="/admin/AddRobot">Add Robots</Link>
          </div >
          <br/>
         <div className='row mt-4 btn btn-primary col-6 radius d-flex justify-content-center'> 
         <Link className='text-white col-4' to="/admin/Robots">Robots</Link>
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
export default Admin
