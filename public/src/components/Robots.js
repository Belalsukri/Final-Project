import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardDeck,Col,
   CardBody
} from 'reactstrap';

const Robots = (props) => {
  return (
    <div className="container register mb-5">
    <div className="row ">
      
    <CardDeck>
      <Card className='col-md-12'>
      <Col sm="3">
        <CardImg top width="15%" src="/img/robot.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
          
          <Button className=' mr-5'>Button</Button>
          <Button className='btn btn-primary '>Button</Button>
        </CardBody>
        </Col>
      </Card>
     
      
    </CardDeck>
    </div>
    </div>

  );
};

export default Robots;