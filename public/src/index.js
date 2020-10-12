import React from 'react'
import ReactDOM from 'react-dom'

import Router from './components/Router'

const App =()=>{
    return(
        <React.Fragment>   
       
            <Router >
           <div >
            
           </div>
            </Router >
        
            </React.Fragment>
    )
}
ReactDOM.render(<App/>,document.querySelector('#root'))
