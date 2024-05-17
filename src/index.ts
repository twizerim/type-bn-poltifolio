import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./documatation/swagger_output.json";
import cors from "cors"




dotenv.config();

const andela = express();

andela.use(bodyParser.json());
andela.use(cors())
andela.use("/Jant", router);
andela.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

const portas = parseInt(process.env.PORT || "3000", 10);
const db = process.env.DATABASE || "";

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
