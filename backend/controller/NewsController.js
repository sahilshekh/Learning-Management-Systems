const express=require("express");
const axios =require("axios")


const NewsController = async (req,res) => {
  try {
    let data;
    
if(req.query.search){

const serachdata = await axios.get(`https://newsapi.org/v2/everything?q=${req.query.search}&apiKey=3f8b30aeebe54599ae3af17ddb6c731c`)
  console.log(req.query.search)
  // console.log(serachdata)
  data =serachdata.data.articles
}
else{
  const url2 = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3f8b30aeebe54599ae3af17ddb6c731c")
  
  data =url2.data.articles
}

var arr =[
  {
      count:0,
      data : []
  }
]
for(var i=0;i<data.length;i++){
  arr[0].data.push(
      
    {
      headline: data[i].description,
      link: data[i].url,
        // temp: data[i].main.temp
     }
  
    )  
}
arr[0].count =arr[0].data.length

return res.status(200).send(arr)

  } catch (error) {
    // console.log(error)
    return res.status(500).send(error)
  }
}
module.exports = NewsController;