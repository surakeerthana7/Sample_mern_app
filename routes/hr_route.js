let express=require('express');
let router=express.Router()
// Router() used to connect api with comman router
router.get("/viewemp",(req,res)=>{   
    res.send("viewemp route called");
})
router.post("/assign-task",(req,res)=>{
    res.send("assign-task route called");
})
router.delete("/deleteemp",(req,res)=>{
    res.send("deleteemp route called");
})
router.patch("/viewtask",(req,res)=>{
    res.send("uviewtask route called");
})
module.exports=router;