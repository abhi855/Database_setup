const mongoose = require("mongoose")

const courseTemplate = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  minute: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numberenroll: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("abhiTable", courseTemplate)
