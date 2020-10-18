import React from 'react'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import AddRobot from './AddRobot'
import Admin from './Admin'
import Robots from './Robots'
import ControlPanal from './ControlPanal'
import EditRobot from './EditRobot'
import ForgotPassword from './ForgotPassword'
import Changepassword from './Changepassword'
import CheckLogin from './CheckLogin'
import {checkLogintPost} from '../services/api'
import {connect} from 'react-redux'
import{setUserAction} from '../actions'
class Router extends React.Component {

  componentDidMount(){
    checkLogintPost().then(data=>{
      if (data !=10) {
        this.props.setUserAction(data)
      }
    })
  }
      render() {
        return (
          <BrowserRouter>
              
             
                  <NavBar/>
                  
                  <Switch>
                  <Route path='/'exact component={Home}/>
                  
                  <Route path='/About'exact component= {About} />
                  <Route path='/Services'exact component= {Services}/>
                  <Route path='/Login'exact component={()=><CheckLogin><Login/></CheckLogin>}/>
                  <Route path='/ForgotPassword'exact component={ForgotPassword}/>
                  <Route path='/Changepassword/:id'exact component={Changepassword}/>
                  <Route path='/Register'exact component={Register}/>
                  <Route path='/Contact'exact component= {Contact} />
                  
                  <Route path='/Admin'exact component= {()=><CheckLogin><Admin/></CheckLogin>}/>
                  <Route path='/Admin/Robots'exact component={()=><CheckLogin><Robots/></CheckLogin>} />
                  <Route path='/Admin/AddRobot'exact component={()=><CheckLogin><AddRobot/></CheckLogin>}/>
                  <Route path='/Admin/ControlPanal'exact component={()=><CheckLogin><ControlPanal/></CheckLogin>}/>
                  <Route path='/Admin/EditRobot/:id'exact component={()=><CheckLogin><EditRobot/></CheckLogin>}/>
                  </Switch>
                  <Footer/>
              
          </BrowserRouter> 
        )
      }
    }
    export default connect(null,{setUserAction}) (Router)