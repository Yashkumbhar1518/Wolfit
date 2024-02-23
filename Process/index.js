import express from "express"
import mongoose from "mongoose"
import Reciepe from './routes/Reciepe.js'
import cors from "cors";

const server = express()
server.use(express.json());
server.use(cors());

main()
async function main() {
    await mongoose.connect("mongodb+srv://Yash:SbegDv!SEhY6fPs@atlascluster.gxpo6ly.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster").then(() => console.log("database connected"));
}
server.get("/",(req , res)=>{
    res.status(200).json("Get data");
})

server.use("/reciepe" , Reciepe)

server.listen(8081, () => {
    console.log("server started at port 8081");
});