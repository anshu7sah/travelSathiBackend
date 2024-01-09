import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import destinationRoutes from "./routes/destinations";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(destinationRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("how are you?");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const start = async () => {
  await mongoose.connect(process.env.MONGO_URL!);
  console.log("connected to database");
};
start();
