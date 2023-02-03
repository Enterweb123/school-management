const router =require("express").Router();

// const User = require("../models").User
const {Students,Classes} = require("../models")

// 1) check router
router.get("/", async(req,res)=>{
  res.send("Student route is live now")
});

// 2) get all student
router.get("/allstudent", async(req,res)=>{
  const allstudent = await Students.find().populate("teachers", "teachername contact").populate("classes", "classname");
  res.json(allstudent);
});

// 3) create new student
router.post("/addstudent", async(req,res)=> {
  try {
    const Newstudent = await Students.create(req.body);

    const classUpdate = await Classes.findByIdAndUpdate(
        req.body.classes,
          { $push: {student:Newstudent._id} },
          { new:true } );
        
      return res.json({
        "students":Newstudent,
        "class":classUpdate,
      });
  }
  
  catch (error) {
      return res.json({msg: error.message });
  } 
});


module.exports = router;