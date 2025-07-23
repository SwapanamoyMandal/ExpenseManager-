require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const expenseRouter = require('./expenseRouter');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
  origin: process.env.FONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Routes
app.use('/expense', expenseRouter.router);

app.get('/', (req, res) => {
  console.log('Got a hit');
  res.status(200).json({ message: 'Welcome to the Expenzz web application 💓' });
});

// Port
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`🤖 Server is running on port ${port}`);
});
