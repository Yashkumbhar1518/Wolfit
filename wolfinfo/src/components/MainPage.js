import React, { useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Mycontext } from './context/Mycontext';

function MainPage() {
    const {login} = useContext(Mycontext);
  return (
    <div style={{background: "linear-gradient(90deg, rgba(252,176,69,1) -50%, rgba(131,58,180,1) 17%, rgba(253,29,101,1) 93%)" , width:"100vw" , height:"100vh" , paddingTop:"10%"}}>
      {login ? <Login /> : <Signup />}
    </div>
  )
}

export default MainPage
