
const express=require("express");
const axios =require("axios")
// const router= express.Router();
// const fetch =require('node-fetch');

const weatherController = async (req,res) => {
 
  try {
   const url = await axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d7b35f28a05323ec67ef6c8dad1d4568")
  let data =url.data.list
    var arr =[
        {
            count:0,
            unit:"metric",
            location:"Bangalore",
            data : []
        }
    ]
    
    //2022-08-09 15:00:00
    var arr2 = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let arr3=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
      
    for(var i=0;i<data.length;i++){
var rec = data[i].dt_txt
let year = rec.slice(0,4)
let month = rec.slice(5,7)
let day = rec.slice(11,13)
  month =arr2[+month-1]
 let result =arr3[+day%7]
// console.log(year,month,result,"Part")


      arr[0].data.push(
      
        {
            date: `${result} ${month} ${day} ${year}`,//Sun March 06 2020
            main: data[i].weather[0].main,
            temp: data[i].main.temp
         }
      
        )  
    }
   
    arr[0].count =arr[0].data.length
    // console.log(arr[0].data,"line33")
    
   
    return res.status(200).send(arr)
   
  } catch (error) {
    // console.log(error)
    return res.status(500).send(error)
  }
    
}


module.exports = weatherController;



