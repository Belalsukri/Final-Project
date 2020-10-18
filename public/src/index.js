import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import{Provider} from 'react-redux'
import Router from './components/Router'
import reducers from './reducers'
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
ReactDOM.render( 
    <Provider store={createStore(reducers)}>
<App/>
</Provider>
,document.querySelector('#root'))
