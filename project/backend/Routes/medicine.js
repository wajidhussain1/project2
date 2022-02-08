import express from "express";
import { medicinedata, medicinedatabyId } from "../controllers/medicine.js";
const medicineapp = express.Router();
medicineapp.get("/", medicinedata);
medicineapp.get("/:id", medicinedatabyId);
export default medicineapp;
