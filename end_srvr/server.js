import express from "express";
import morgan from "morgan";
import cors from 'cors'
import bodyParser  from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import PublishRideRoute from "./routes/publishRideRoute.js";
import EmailRoutes from "./routes/EmailRoutes.js";



// Configuring dotenv(global variables)
dotenv.config();

//database connection
connectDb();

//rest object
const app=express();




const allowedOrigins = ['http://localhost:3000', 'https://delbil.vercel.app'];

//middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));app.use(express.json());
app.use(morgan(('dev')));

//Routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/publishRide',PublishRideRoute);
app.use('/api/v1/email',EmailRoutes);


app.get("/",(req,res)=>{
    res.send("Welcome to our bot.")
})

app.listen(8080,()=>{
    console.log(`Server running on port ${process.env.PORT || 8080}`)
})