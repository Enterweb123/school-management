const router = require("express").Router();

const {Classes} = require("../models");


// get all class
router.get("/", async(req,res)=>{
res.send('class route is live');
});


// add class
router.post("/addclass", async(req,res)=>{
  try {
      const addclass = new Classes(req.body);
      const data = await addclass.save();
        return res.json(data);
  } 
  catch (error) {
      return res.json({msg: error.message });
  } 
});


// find class by id
router.get("/allclass", async(req,res)=>{
  try {
    const allclass = await Classes.find().populate("student","studentname enrollmentdate").populate("teachers","teachername experience");
    res.json(allclass);
  } 
  catch (error) {
    res.json({"msg":error.message});
  }
});


module.exports = router; 