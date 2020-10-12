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

class Router extends React.Component {
      render() {
        return (
          <BrowserRouter>
              
             
                  <NavBar/>
                  
                  <Switch>
                  <Route path='/'exact component={Home}/>
                  
                  <Route path='/About'exact component={About}/>
                  <Route path='/Services'exact component={Services}/>
                  <Route path='/Login'exact component={Login}/>
                  <Route path='/ForgotPassword'exact component={ForgotPassword}/>
                  <Route path='/Changepassword/:id'exact component={Changepassword}/>
                  <Route path='/Register'exact component={Register}/>
                  <Route path='/Contact'exact component={Contact}/>
                  <Route path='/ControlPanal'exact component={ControlPanal}/>
                  <Route path='/Admin'exact component={Admin}/>
                  <Route path='/Admin/Robots'exact component={Robots}/>
                  <Route path='/admin/AddRobot'exact component={AddRobot}/>
                  
                  <Route path='/Admin/EditRobot/:id'exact component={EditRobot}/>
                  </Switch>
                  <Footer/>
              
          </BrowserRouter> 
        )
      }
    }
    export default Router