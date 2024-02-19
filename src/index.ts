import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";


dotenv.config();

const andela = express();

andela.use(bodyParser.json());
andela.use("/Jant", router);

const portas = parseInt(process.env.PORT || "3000", 10);
const db = process.env.DATABASE || "mongodb+srv://gedeonprogrammer:programmer12@cluster0.8sikbdc.mongodb.net/Andela-poltifolio";

mongoose.connect(db)
  .then(() => {
    console.log("Database successfully connected.....");
    andela.listen(portas, () => {
      console.log(`Server running on port ${portas}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

export default andela;
