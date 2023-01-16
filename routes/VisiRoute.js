import express from "express";
import { getVisi, createVisi, updateVisi } from "../controllers/Visi.js";

const router = express.Router();

router.get('/visi', getVisi);
router.post('/visi/create', createVisi);
router.patch('/visi/:id', updateVisi);

export default router;