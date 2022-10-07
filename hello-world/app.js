const express = require('express');

const app=express()


// ? localhost:9000/     endpoint + /hola
app.get('/hola',(request,response)=>{
    response.json({
        message:'hola mundo'
    })
})

app.listen(9000,()=>{
    console.log('Server initialized at port 9000')
})