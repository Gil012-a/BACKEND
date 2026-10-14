import pool from '../config/db.js';

// Retrieve all books
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};