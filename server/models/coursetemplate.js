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
  }

})

module.exports = mongoose.model("abhiTable", courseTemplate)
