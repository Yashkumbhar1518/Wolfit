import React, { useState } from "react";
import Style from "./About.module.css";
import axios from "axios";

function About() {
    const [ inpVal  , setInpVal] = useState({
        rname: '',
        rprocess: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setInpVal(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
    //   console.log(rname);
      const data = { rname: inpVal.rname , rprocess: inpVal.rprocess};
      const response = await axios.post(
        "http://localhost:8081/reciepe/newReciepe",
        data
        
      );
      if (response.status === 200) {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={Style.container}>
      <form className={Style.form}>
        <fieldset>
          <legend className={Style.heading}>Your Reciepe</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label " style={{textAlign:'center' , fontFamily:"Poppins" , fontWeight:"400" , color:"whitesmoke"}}>
              Add your reciepe name
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Add Reciepe"
              name="rname"
              value={inpVal.rname}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label" style={{textAlign:'center' , fontFamily:"Poppins" , fontWeight:"400" , color:"whitesmoke"}}>
              Process to make reciepe
            </label>
            <input
              type="text-area"
              id="disabledTextInput"
              className="form-control"
              placeholder="Description"
              name="rprocess"
              value={inpVal.rprocess}
              onChange={handleChange}
            ></input>
          </div>
          <div className={`mb-3 ${Style.btncont} `}   >
            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
                Submit
            </button>
          </div>
        </fieldset>
      </form>
      
    </div>
  );
}

export default About;
