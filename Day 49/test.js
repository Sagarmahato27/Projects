const express = require(`express`);
const app=express();
var cors = require(`cors`);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.listen(3000,()=>{
    console.log("Server up and running");
})
app.post("/submit",(req,res)=>{
    console.log
    console.log("Form Submotted Successcfully");
    res.send(req.body);
})
