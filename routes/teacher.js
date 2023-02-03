const router = require("express").Router();

const {Classes} = require("../models");
const {Teachers} = require("../models");

router.get("/", async(req,res)=>{
 res.send("teacher  router is live now")
});

router.get("/allteachers", async(req,res)=>{
  try {
    const teachers = await Teachers.find();
    res.json(teachers);
  } 
  catch (error) {
    res.json({"msg":error.message});
  }
});

router.post("/addteacher", async(req,res)=>{

  try {
    const teacher = await Teachers.create(req.body);
        return res.json( {
          "Teacher":teacher,} );
        
      } 
  catch (error) {
    return res.json({msg: error.message });
  } 
});


module.exports = router; 