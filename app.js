const express=require('express')
const request=require('request')
const app=express()


app.use(express.static('public'))

app.set('view engine','ejs')


app.get('/search',(req,res)=>{
   res.render('search')
})

app.get('/result',(req,res)=>{
    const query=req.query.search

 request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb `,(error,response,body)=>{

      
      const object=JSON.parse(body)
      res.render('result',{data:object.Search})
     
 })

})



app.listen(3000,()=>{
    console.log('running')
})