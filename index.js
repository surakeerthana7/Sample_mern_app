let express=require('express');
let app=express();
//localhost:3000/addStudent
app.post("/addStudent",(req,res)=>{
    res.send("add student called");
});
//localhost:3000/getStudents
app.get("/getStudents",(req,res)=>{
    res.send("get students called");
});
//localhost:3000/updateStudent
app.put("/updateStudents",(req,res)=>{
    res.send("update students called");
});
//run the server
app.listen(3000,()=>{
    console.log("sever listening on port 3000");
})