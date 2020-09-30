import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import RouterHome from './components/home/RouterHome'
import Footer from './components/Footer'
const App =()=>{
    return(
        <React.Fragment>
            <NavBar />
           <RouterHome/>
            <Footer />
         </React.Fragment>
        
    )
}
ReactDOM.render(<App/>,document.querySelector('#root'))
