const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Instructor: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: false },
    optional: { type: String, required: false },
  },
 
);

module.exports = mongoose.model("assignment", assignmentSchema);
