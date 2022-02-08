import express from "express";
import medicinedatas from "./Routes/medicine.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const medapp = express();

medapp.use(cors());
medapp.get("/", (res, req) => {
  // console.log("Api is working");
  res.json({message: "Api is working"});
});
medapp.get("/api/medicine", medicinedatas);

const port = process.env.PORT | 5000;

medapp.listen(port, () => {
  console.log(`Application is running in ${process.env.NODE_ENV} mode at ${port} port.`
  );
});
export default medapp;
