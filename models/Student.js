const mongoose = require("mongoose");

// reference another collection
const StudentSchema = new mongoose.Schema({

  studentname: String,
  contact_no: String,
  address: String,
  enrollmentdate: {
    type: Date,
    default: Date.now
  },

  teachers: {
    type: mongoose.Types.ObjectId,
    ref: "teachers"
  },

  classes: {
    type: mongoose.Types.ObjectId,
    ref: "classes"
  },

},
  { timestamps: true }
);

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;