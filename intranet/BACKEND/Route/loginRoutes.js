const express = require('express');
const router = express.Router();
const db = require('../db');
const oracledb = require('oracledb');

// POST /api/login
router.post('/', async (req, res) => {
  console.log('Login route hit'); // Debug log
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Get a database connection from the pool
    const connection = await db.getConnection();
    console.log('Database connection established');

    // Debug log for parameters
    console.log(`Querying with username: ${username} and password: ${password}`);
    
    // Query to check if the username and password match
    const result = await connection.execute(
      `SELECT COUNT(*) AS count 
       FROM INTRANET.LOGIN 
       WHERE USERNAME = :username 
       AND PASSWORD = :password`,
      { username, password }, // Bind parameters as an object
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // Format the result as an object
    );
    
    // Debug log for result
    console.log(`Query result: ${JSON.stringify(result.rows)}`);

    // Release the connection back to the pool
    await connection.close();

    // Extract user count from the result
    const userCount = result.rows[0]['COUNT'];

    if (userCount > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Database error: ' + err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
