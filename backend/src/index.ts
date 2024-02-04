import express, { Application, NextFunction, Request, Response} from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user'
import musicRouter from './routes/music'

dotenv.config();
const app: Application = express();

app.use(cors())
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use('/api/user', userRouter);
app.use('/api/music', musicRouter);

const start = async () => {
    try {
      mongoose.connect(process.env.MONGOOSE_URL ?? "");
    } catch (err) {
      console.log(err)
    }
  };
  
  mongoose.connection.on('disconnected',() => {
      console.log("mongoDB disconnected")
  })

  mongoose.connection.on('connected',() => { 
      console.log("mongoDB connected")
  })
  
  app.listen(5000, async() =>{
      await start()
  })