const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const todoRouter = require('./routers/todoRouters')
const cors=require('cors');
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json())

app.use('/todo',todoRouter)
connectDB();

app.listen(PORT, () => { console.log(`server running on port http://localhost:${PORT}`) })