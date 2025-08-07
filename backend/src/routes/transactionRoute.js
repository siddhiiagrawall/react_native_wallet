import express from 'express';
import { sql } from '../config/db.js';
const router = express.Router();
import { getTransactionByUserId, createTransaction, deleteTransaction,getTransactionSummary } from '../controllers/transactionController.js';
router.get('/:userID', getTransactionByUserId);
router.post('/', createTransaction);
router.delete('/:id', deleteTransaction);
router.get('/summary/:userID', getTransactionSummary);

export default router;