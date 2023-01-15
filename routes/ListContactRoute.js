import express from "express";
import { getListContact, getListContactById, createListContact, updateListContact, deleteListContact } from "../controllers/ListContact.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/list-contact', verifyUser, getListContact);
router.get('/list-contact/:id', verifyUser, getListContactById);
router.post('/list-contact/create', createListContact);
router.patch('/list-contact/:id', verifyUser, updateListContact);
router.delete('/list-contact/:id', verifyUser, deleteListContact);

export default router;