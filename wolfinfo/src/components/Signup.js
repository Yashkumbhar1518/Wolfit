import React, { useContext, useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import Style from  './Signup.module.css'
import { Mycontext } from "./context/Mycontext";

function Signup() {
  const {FormData, setFormData} = useContext(Mycontext);

  const {setLogin} = useContext(Mycontext);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      // You can add validation logic here before submitting the form
      
      console.log(FormData);
      alert("User registered");
      e.preventDefault();
    // Reset the form after submission if needed
    
  };

  return (
    <Container
    className={Style.container}
      component="main"
      maxWidth="xs"
      style={{ justifyContent: "center" }}
    >
      <Typography className={Style.heading}
        component="h1"
        variant="h5"
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}

      >
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            className={Style.inpfield}
              
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={FormData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={Style.inpfield}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={FormData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={Style.inpfield}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={FormData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={Style.inpfield}
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={FormData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          className={Style.button}
        >
          Signup
        </Button>
        <Button
          type="submit"
          fullWidth
          
          sx={{ mb: 2 }}
          onClick={()=>setLogin(true)}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Signup;
