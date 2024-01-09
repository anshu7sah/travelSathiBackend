import express from "express";
import { getAllPlaces, getSinglePlaces } from "../controllers/destinations";

const router = express.Router();

router.get("/allplaces", getAllPlaces);
// router.post("/createplaces", createPlaces);
router.get("/allplaces/:id", getSinglePlaces);

export default router;
