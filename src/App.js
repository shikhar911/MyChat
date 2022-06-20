
import React from 'react' 

import Signin from './Component/Signin.js';
import Chat from './Component/Chat.js';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() { 
  const [user] = useAuthState(auth)
  return ( 
    <>
    <div className="App">
      <header className="App-header">
       
         <div
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
         
        </div>
      </header>
    </div>
    
      {user ? <Chat /> : <Signin />}
    </>
  );
}
export default App