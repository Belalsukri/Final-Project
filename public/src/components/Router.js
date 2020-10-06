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
class Router extends React.Component {
      render() {
        return (
          <BrowserRouter>
              
             
                  <NavBar/>
                  
                  <Switch>
                  <Route path='/'exact component={Home}/>
                  <Route path='/Admin'exact component={Admin}/>
                  <Route path='/Admin/Robots'exact component={Robots}/>
                  <Route path='/About'exact component={About}/>
                  <Route path='/Services'exact component={Services}/>
                  <Route path='/Login'exact component={Login}/>
                  <Route path='/Register'exact component={Register}/>
                  <Route path='/Contact'exact component={Contact}/>
                  <Route path='/admin/AddRobot'exact component={AddRobot}/>
                  </Switch>
                  <Footer/>
              
          </BrowserRouter> 
        )
      }
    }
    export default Router