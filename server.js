
const express= require('express');
const app= express();
const port =3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"this hello word project"});
});
app.listen(port,()=>{
    console.log(`server is running on port localhost:${port}`);
});