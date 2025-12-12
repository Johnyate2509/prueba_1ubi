import express from "express";
import cors from "cors";
import repartidoresRoutes from "./routes/repartidores.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/repartidores", repartidoresRoutes);

app.listen(process.env.PORT, () =>
  console.log("Servidor corriendo en puerto", process.env.PORT)
);
