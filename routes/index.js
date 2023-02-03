const router = require("express").Router();

const classRoute = require("./class");
const teacherRoute = require("./teacher");
const studentRoute = require("./student");


router.get("/", (req,res)=>{
    res.send("Router index is woking");
});

router.use("/class",classRoute);
router.use("/teacher",teacherRoute);
router.use("/student",studentRoute);

module.exports = router;