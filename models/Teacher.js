const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  teachername: String,
  qualification: String,
  experience: {
    type: Number,
    default: 0
  },
  contact: String,
},
  { timestamps: true }

);

const Teacher = mongoose.model("teachers", TeacherSchema);

module.exports = Teacher;