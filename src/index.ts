import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
dotenv.config();
import router from "@routes/post-routes";


const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", router);

app.get ("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
  console.log("Listenning on port " + PORT);
});
