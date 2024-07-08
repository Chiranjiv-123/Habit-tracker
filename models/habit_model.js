const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  hab_name: {
    type: String,
    required: true,
    trim: true,
  },
  date_day: {
    type: [Boolean],
    default: [false, false, false, false, false, false, false],
  },
  date_arr: {
    type: [String],
    required: true,
  },
});

const HabitsModel = new mongoose.model("HabitModel", habitSchema);
module.exports = HabitsModel;
