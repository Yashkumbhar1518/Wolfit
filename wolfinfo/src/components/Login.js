import React, { useContext, useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { Mycontext } from './context/Mycontext';
import Style from  './Login.module.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {FormData , setwelcome} = useContext(Mycontext)

  const {setLogin} = useContext(Mycontext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 const navigate = useNavigate();
  const handleSubmit = (e) => {
    if(formData.email === FormData.email && formData.password === FormData.password){
        setwelcome(true);
        // console.log("logged in")
        navigate("/home")
    }
    else{
        alert("Invalid credentials");
    }
    e.preventDefault();
    // You can add authentication logic here
    console.log(formData);
    // Reset the form after submission if needed
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
   
        <Container component="main" maxWidth="xs" style={{ justifyContent:'center'}} className={Style.container}>
        <Typography component="h1" variant="h5" style={{}} className={Style.heading}  style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold"}} >
            Login
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
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
            onClick={handleSubmit}
            >
            Login
            </Button>
            <Button
            type="submit"
            fullWidth
            
            
            sx={{ mb: 2 }}
            onClick={()=> setLogin(false)}
            className={Style.button1}
            >
            Signup
            </Button>
        </form>
        </Container>
    
    
  );
}

export default Login;

