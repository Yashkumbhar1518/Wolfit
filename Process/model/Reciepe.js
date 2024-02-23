import mongoose from "mongoose";
import { Schema } from "mongoose";

const reciepeSchema = Schema(
    {
        rname:{
            type:String,
            required:true,
        },
        rprocess:{
            type:String,
            required:true,
        }
    }
)
export const Recp = mongoose.model("reciepes" , reciepeSchema )