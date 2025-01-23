const express =require("express");
const cors =require("cors");
const {MongoClient} =require("mongodb");
const app=express();
app.use(express.json());
app.use(cors());
app.post("/save",(req,res)=>{
    let url ="mongodb+srv://2022sahilmotiramani:lsf2OIXiEcoZ2VVl@cluster0.6yfll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    let con=new MongoClient(url);
    let db=con.db("ss23jan25");
    let coll=db.collection("student");
    let doc={"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg};
    coll.insertOne(doc)
    .then(result=>res.send(result))
    .catch(error=>res.send(error));
});
app.listen(9000,()=>{console.log("ready @9000");})

