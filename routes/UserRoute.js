import express from "express";
import { getUser, getUserById, createUser, updateUser, deleteUser } from "../controllers/User.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/user', verifyUser, getUser);
router.get('/user/:id', verifyUser, getUserById);
router.post('/user/create', createUser);
router.patch('/user/:id', verifyUser, updateUser);
router.delete('/user/:id', verifyUser, deleteUser);

export default router;