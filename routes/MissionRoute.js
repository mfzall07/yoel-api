import express from "express";
import { getMission, createMission, updateMission } from "../controllers/Mission.js";

const router = express.Router();

router.get('/mission', getMission);
router.post('/mission/create', createMission);
router.patch('/mission/:id', updateMission);

export default router;