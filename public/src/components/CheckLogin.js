import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import{checkLogintPost} from '../services/api'
import {connect} from 'react-redux'
import{setUserAction} from '../actions'
const CheckLogin=props =>{
 const history= useHistory()
    useEffect(()=>{
        checkLogintPost().then(data=>{
            console.log(data);
            if (data ===10) {
                history.push('/login')  
            } else {
                props.setUserAction(data)
            }
        })
    },[])
    return props.children
}
export default connect(null,{setUserAction}) (CheckLogin)