const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./routers/egRouters')
const cors=require('core');
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use('/',router)
app.use(cors());

connectDB();

app.listen(PORT, () => { console.log(`server running on port http://localhost:${PORT}`) })