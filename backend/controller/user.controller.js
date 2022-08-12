const express= require("express");
const axios =require("axios")
const authenticate =require("../middlewares/authenticate")
const router= express.Router();
 
const User= require("../model/user.model");
router.get("", authenticate, async(req,res)=>{
    try {
        const users= await User.find().lean().exec();
     return   res.send(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

     
   
module.exports=router;
