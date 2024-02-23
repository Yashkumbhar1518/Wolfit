import {Recp} from "../model/Reciepe.js"
export const newReciepe =async (req  , res) =>{
    try {
        const {rname  , rprocess} = req.body;
        const data = await Recp.create({rname , rprocess});
        res.status(200).json(data); 
    } catch (error) {
        res.status(400).json(error);
    }

}
export const getReciepe = async(req , res) =>{
    try {
        const data = await Recp.find();
    res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}