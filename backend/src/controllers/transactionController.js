import {sql} from '../config/db.js';    
export async function getTransactionByUserId(req, res) {
       try {
           const { userID } = req.params;        
           const transactions = await sql`SELECT * FROM transactions WHERE user_id = ${userID} order by created_at desc`;
           res.status(200).json(transactions);
       } catch (error) {
           console.error('Error fetching transactions:', error);
           res.status(500).json({ error: 'Internal server error' });
       } 
}

export async function createTransaction(req, res) {
    try {
        const { user_id, title, amount, category } = req.body;
        if (!user_id || !title || amount === undefined || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }
            const transaction = await sql`INSERT INTO transactions (user_id, title, amount, category)
            VALUES (${user_id}, ${title}, ${amount}, ${category})
            RETURNING *`;
            console.log(transaction);
            res.status(201).json(transaction[0]);
    
        }catch (error) {
            console.error('Error creating transaction:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
}

export async function deleteTransaction(req, res) {
        try {
            const { id } = req.params;
            if (isNaN(parseInt(id))) {
                return res.status(400).json({ error: 'Invalid Transaction ID' });
            }
            const result = await sql`DELETE FROM transactions WHERE id = ${id} RETURNING *`;
            if (result.length === 0) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.status(200).json({ message: 'Transaction deleted successfully', transaction: result[0] });
        } catch (error) {
            console.error('Error deleting transaction:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
}

export async function getTransactionSummary(req, res) {
    try {
        const { userID } = req.params;
        const balanceResult = await sql`
            SELECT COALESCE(SUM(amount), 0) as balance
            FROM transactions
            WHERE user_id = ${userID}
        `;
        const incomeResult = await sql`
            SELECT COALESCE(SUM(amount), 0) as income
            FROM transactions
            WHERE user_id = ${userID} AND amount > 0
        `;
        const expenseResult = await sql`
            SELECT COALESCE(SUM(amount), 0) as expense
            FROM transactions
            WHERE user_id = ${userID} AND amount < 0
        `;
        res.status(200).json({ balance: balanceResult[0].balance, income: incomeResult[0].income, expense: expenseResult[0].expense });
    } catch (error) {
        console.error('Error fetching transactions summary:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}