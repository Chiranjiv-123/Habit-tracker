const express = require("express");
const router = new express.Router();
const HabitsModel = require("../models/habit_model");

router.get("/", function (req, res) {
  res.render("index.html");
});

router.get("/api/habits", async (req, res) => {
  try {
    const getHabits = await HabitsModel.find({});
    res.status(200).send(getHabits);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/api/habits", async (req, res) => {
  try {
    const addHabit = new HabitsModel(req.body);
    const insertHabit = await addHabit.save();
    res.status(201).send(insertHabit);
  } catch (e) {
    console.log("error while adding data");
    res.status(400).send(e);
  }
});

router.get("/api/habits/:id", async (req, res) => {
  try {
    const getHabit = await HabitsModel.findById(req.params.id);
    res.status(200).send(getHabit);
  } catch (e) {
    res.status(404).send("Habit Not Found");
  }
});

router.patch("/api/habits/:id", async (req, res) => {
  try {
    const getHabit = await HabitsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(getHabit);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/api/habits/:id", async (req, res) => {
  try {
    const getHabits = await HabitsModel.findByIdAndDelete(req.params.id);
    res.status(200).send(getHabits);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
