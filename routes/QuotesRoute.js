import express from "express";
import { getQuotes, createQuotes, updateQuotes } from "../controllers/Quotes.js";

const router = express.Router();

router.get('/quotes', getQuotes);
router.post('/quotes/create', createQuotes);
router.patch('/quotes/:id', updateQuotes);

export default router;