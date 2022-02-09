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
  //   date: {
  //     type: Date,
  //     default: Date.now,
  //   },
  //   rating: {
  //     type: Number,
  //     default: 0,
  //   },
  //   numberofenroll: {
  //     type: Number,
  //     default: 0,
  //   },
})

module.exports = mongoose.model("mytable", courseTemplate)
