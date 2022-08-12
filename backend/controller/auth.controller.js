require("dotenv").config();
const express = require("express")
const User= require("../model/user.model");
const session = require('express-session')
const jwt= require("jsonwebtoken");
// function to create new token for the new user
const app =express()
// app.use(session({secret:"b1q6sDlQDk2Q8-eS8QZ5y7VB2r3u&J)1"}))

const newToken=(user)=>{
    return jwt.sign({user},`${process.env.JWT_SECRET_KEY}`)
}
const register= async (req,res)=>{
    try {
        // we wil try to find user with the email id 
         let user= await User.findOne({email:req.body.email}).lean().exec();
      //  if the  user is found then it is an error 
      // it means this email has already registered with the previous user
         if(user){
             return res.status(400).send({message:"Please try another email id"});
         }

        // if the use is not found then we will create new user with email and password
        user= await User.create(req.body);

        // then we will crete a token to that user
        const token= newToken(user); // calling the token function to generate token
        // then return the token to the user
        return res.status(201).send({user,token})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const login= async(req,res)=>{
   
    try {
       
        // if(req.session){
        //     req.session
        //     req.send("Count:",req.session)
        // }
        // else{
        //     req.session;
        //     res.send("welcome the site first time",req.session)
        // }
        //  first we will find the user by email id


        const user= await User.findOne({email:req.body.email});

        // if user is not found then it's a error
        if(!user){
            return res.status(400).send({message:"Please try another email or password"})
        }
        // if user found then we will match the password and create a new token 
        const match= user.checkPassword(req.body.password);
        if(!match){
            return res.status(400).send({message:"Please try another email or password"})
        }
        // then we will crete a token to that user
        const token= newToken(user); // calling the token function to generate token
        // then return the token to the user
        return res.status(201).send({user,token})


    } catch (error) {
        return res.send(error.message)
    }
   
}

const logout =  async(req,res)=>{
    try {
        console.log(req.session)
        token =undefined;
        res.send("logout")
   
    } catch (error) {
       return  res.status(500).send(error.message)
    }
}

module.exports={register,login , logout}