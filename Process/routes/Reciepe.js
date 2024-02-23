import express from "express"
import {newReciepe , getReciepe} from "../controller/reciepeControl.js"


const router = express.Router();

router
    .post('/newreciepe' , newReciepe)
    .get('/getreciepe' , getReciepe)

export default router;