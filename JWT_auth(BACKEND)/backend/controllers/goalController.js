const asyncHandler = require("express-async-handler");

//Get Goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//Set Goal

const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "SET GOALS" });
});

//Update Goal
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//DeleteGoal

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
