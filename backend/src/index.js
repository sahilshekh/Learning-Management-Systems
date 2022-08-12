 
   const express = require("express")
   const cors= require("cors")
   const dotenv=require('dotenv');
   const app =express()
   const cookieParser = require('cookie-parser')
   const authenticate =require("../middlewares/authenticate")
   app.use(cookieParser());
   app.use(cors())
   app.use(express.json())



  const {register,login,logout}= require("../controller/auth.controller")
  const weather = require("../controller/weatherController")
  const News = require("../controller/NewsController")
  const userController= require("../controller/user.controller")

  app.post("/signup",register)
  app.post("/login",login)
  app.get("/logout",logout)
  app.use("/users",userController)
  app.get("/weather",weather)
  app.get("/news",authenticate, News)

  dotenv.config({path:"./config/config.env"})

   const connect =require("../config/db")
connect()

app.listen((process.env.PORT || 8080), function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 })
