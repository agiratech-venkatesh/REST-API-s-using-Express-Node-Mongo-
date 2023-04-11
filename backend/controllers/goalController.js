const asyncHandler = require("express-async-handler")
const Goal = require('../models/goalModel')

// @desc  GET GOALS
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler( async(req,res) =>{

    const goalsAll= await Goal.find()
    res.status(200).json(goalsAll)
})

// @desc  CREATE GOAL
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        // res.status(400).json({ message: 'Please add a text field' })
        throw new Error('Please add a text field')
    }
    const goal= await Goal.create({
        text:req.body.text
    })

    res.status(200).json(goal)
    //res.status(200).json({ message: 'Set goal' })
})

// @desc  UPDATE GOAL
// @route UPDATE /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
  console.log(goal);
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
  
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedGoal)
  })

// @desc  DELETE GOAL
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    console.log(goal);
      if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
      }

      await goal.remove();
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})

module.exports ={
    getGoals,setGoal,updateGoal,deleteGoal
}