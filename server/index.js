import express from "express"
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import doctorRoute from './routes/doctors.js'
import reviewRoute from './routes/review.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000


const corsOptions ={
    origin: true
};

app.get("/",(req,res)=>{
    res.send('API Is Working...')
});


// Database connection

mongoose.set('strictQuery', false)

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB Database is connected')
    } catch (error) {
        console.log('MongoDB Database connection is failed')    
    }
}



// Middleware

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)



app.listen(port, ()=>{
    connectDB();
    console.log('Server is running on port ' + port);
});