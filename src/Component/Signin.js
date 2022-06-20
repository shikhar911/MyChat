import React from 'react' 
import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth';

import {Button} from '@material-ui/core'
import {auth} from '../firebase.js'


function Signin() {  
     function signInWithGoogle(){
      const Provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(Provider)
     }
     return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Button class="btn btn-primary" style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
  </div>
  )
}

export default Signin
