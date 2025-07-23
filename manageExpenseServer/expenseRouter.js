const express = require('express')
const router = express.Router()
const Expensemodel = require('./schema')

router.post('/add', async (req, res) => {
  try {
    const { clerkUserId, expense } = req.body;

    // console.log(clerkUserId,expense)

    if (!clerkUserId || !expense) {
      return res.status(400).json({ message: "Missing clerkclerkUserId or expense data" });
    }

    // Update or insert user document
    const updatedUserExpense = await Expensemodel.findOneAndUpdate(
      { clerkUserId }, // Find user by Clerk ID
      {
        $push: { expenses: expense }, // Add expense to array
        $setOnInsert: { clerkUserId }, // If new user, set Clerk ID
      },
      { upsert: true, new: true } // Create if doesn't exist, return updated doc
    );

     const lastExpense = updatedUserExpense.expenses[updatedUserExpense.expenses.length - 1];

    console.log("Expense saved successfully", updatedUserExpense);
    return res.status(201).json({
      message: "Expense saved successfully",
      data: lastExpense
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
});




router.post('/retrive',async (req,res)=>{
  try {
      const { clerkUserId } = req.body

      // console.log(clerkUserId)

      if (typeof clerkUserId !== 'string') {
          return res.status(400).json({ message: 'Invalid clerkUserId' });
        }


    const responseobj = await Expensemodel.findOne({ clerkUserId })
    // console.log(responseobj.expenses)
    
    return res.status(200).json({result : responseobj.expenses})
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
})
module.exports = {router}