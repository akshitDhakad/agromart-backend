import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server running"));


app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});