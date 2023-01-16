import express from "express";
import { getListContact, getListContactById, createListContact, updateListContact, deleteListContact } from "../controllers/ListContact.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/list-contact', getListContact);
router.get('/list-contact/:id', getListContactById);
router.post('/list-contact/create', createListContact);
router.patch('/list-contact/:id', updateListContact);
router.delete('/list-contact/:id', deleteListContact);

export default router;