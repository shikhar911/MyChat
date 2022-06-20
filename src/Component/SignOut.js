import React from 'react'
//import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js' 
import { Button } from '@material-ui/core'
function SignOut() { 
   
  return (
    
    <div >
        <div  style={{
             position: 'fixed', width: '80%',  backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
           <div style={{float: 'left'  ,  alignItems : "centre"}}><p style={{color : "darkgreen"}}>ChatRoom</p></div>
            <Button type="button" class="btn btn-success " style = {{float : "right"  }}onClick={() => auth.signOut()}>Sign Out</Button>
        </div>  
  </div>
      
        
  )
}

export default SignOut