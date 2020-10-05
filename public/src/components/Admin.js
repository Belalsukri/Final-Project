import React from 'react'
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 const Admin =()=> {
   
        return (
            <div className='container mt-5 mb-5'>    
            <Form >
            <Col md={6}>
            <FormGroup >
        <Label for="exampleUrl">Your Id</Label>
        <Input
          type="text"
          name="text"
          id="exampleUrl"
          placeholder="Your id"
        />
      </FormGroup>
      </Col>
      <Col md={6}>
            <Button>Submit</Button>
            </Col>
          </Form>
          </div>
        )
  
}
export default Admin