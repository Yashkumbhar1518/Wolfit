import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from  "axios";
import Style from "./Home.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Home() {
    const [data  , setdata] = React.useState([]);
    React.useEffect(()=>{
        async function apicall(){
            try {
      
            
              
                const response =  await axios.get(
                  "http://localhost:8081/reciepe/getReciepe",
                  
                  
                );
                if (response.status === 200) {
                  // alert(response.data.message);
                  setdata(response.data);
                  
                }
              } catch (error) {
                alert(error.message);
              }
        }

        apicall();
        
    } , [])
  return (
    <div className='d-flex justify-content-evenly mt-5 flex-wrap'>
         
         {data?.map((recipe, id) => {
  return (
    <div className={Style.card}>
        <Card key={id} sx={{ minWidth: 275}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {recipe.rname}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {recipe.rprocess}
            </Typography>
        
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    </div>
  );
})}


       

        
    </div>
  );
}
