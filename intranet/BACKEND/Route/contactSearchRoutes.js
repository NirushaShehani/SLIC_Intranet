
const db = require('../db');
const express = require('express');
const oracledb = require('oracledb');
const router = express.Router();

const dbConfig = {
  user: 'ais',
  password: 'ais',
  connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
};

// Initialize Oracle Client (Thick mode)
oracledb.initOracleClient({ libDir: 'D:/oracle/instantclient_19_23' }); // Update this path to your Oracle Instant Client directory

// Check mode
console.log('Oracle Client Version:', oracledb.oracleClientVersion); // 0 means Thin mode, >0 means Thick mode

router.post('/search', async (req, res) => {
  const { username, floor, department, select } = req.body;
  console.log('Search Request Body:', req.body); // Log request body

  let connection;

  try {
    connection = await db.getConnection();
    console.log('Connected to Oracle DB');

    let query = `
      SELECT T1DPNM AS Dept, T1DESG AS Designation, T1NAME AS Name, T1NWEX AS Extension, T1FXNM AS FaxNumber, T1MBNM AS MobileNumber
      FROM SLI_APPS.TELCHANG
      WHERE T1FLNM LIKE :varFloor
        AND T1NAME LIKE :varName
        AND T1DPNM LIKE :varDip
      ORDER BY T1NMSQ, ${select || 'T1FLNM'}
    `;

    // SQL query parameters
    const queryParams = {
      varFloor: floor && floor !== 'All' ? floor : '%',
      varName: username ? '%' + username + '%' : '%',
      varDip: department && department !== 'All' ? department : '%'
    };


    // Log the constructed query and parameters
    console.log('Constructed Query:', query);
    console.log('Query Parameters:', queryParams);

    const result = await connection.execute(query, queryParams);

    console.log('Query Result:', result.rows); // Log query result

    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).send('Error querying the database: ' + err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log('Connection closed');
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

module.exports = router;
