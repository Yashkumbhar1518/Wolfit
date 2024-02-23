import React, { useState } from 'react'
import { Mycontext } from './Mycontext'

function Store({children}) {
    const [FormData , setFormData] = useState({
      userName:"",
      email:"",
      password:"",
      confirmPassword:""
    });
    const[login , setLogin] = useState(false);
    const[welcome , setwelcome] =useState(false);
    
  return (
    <Mycontext.Provider value = {{FormData , setFormData , login , setLogin , welcome , setwelcome}}>
        {children}
    </Mycontext.Provider>
  )
}

export default Store
