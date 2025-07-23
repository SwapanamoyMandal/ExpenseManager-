const connectDB = require('./database')

const mongo = require("mongoose")

const expenseSchema = new mongo.Schema(
  {
    clerkUserId: {
      type: String, // Clerk user ID
      required: true,
      index: true,
    },
    expenses: [
      { 
      amount: {
          type: Number,
          required: true,
          min: 0,
        },
      category: {
          type: String,
          enum: [
            "Other",
            "Subscriptions",
            "Fitness & Health",
            "Travel ",
            "Tech & Gadgets",
            "Fashion & Cloths",
            "Food & Beverages",
          ],
          default: "Other",
        },
      date: {
        type: Date,
        default: Date.now,
        }
     }
    ]
  }
);


const Expensemodel = mongo.model('Expensemodel',expenseSchema)

module.exports =  Expensemodel 