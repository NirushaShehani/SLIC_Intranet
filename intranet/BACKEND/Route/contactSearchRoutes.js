
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
  const { username, floor, department } = req.body;
  console.log('Search Request Body:', req.body); // Log request body

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connected to Oracle DB');

    let query = `
      SELECT T1DPNM AS Dept, T1DESG AS Designation, T1NAME AS Name, T1NWEX AS Extension, T1FXNM AS FaxNumber, T1MBNM AS MobileNumber
      FROM SLI_APPS.TELCHANG
      WHERE T1NAME LIKE '%' || :username || '%'
    `;

    let queryParams = { username };

    // Adjust the floor condition to ensure it matches expected format
    if (floor && floor !== 'All Floors') {
      if (floor === 'Ground Floor' || floor === 'Mezzanine Floor') {
        query += ` AND T1FLNM = :floor`;
        queryParams.floor = floor;
      } else {
        query += ` AND T1FLNM = :floor`;
        queryParams.floor = floor.padStart(2, '0'); // Ensure floor is in '01', '02', etc. format
      }
    } else {
      query += ` AND (T1FLNM IN ('Ground Floor', 'Mezzanine Floor') OR T1FLNM BETWEEN '01' AND '14')`;
    }

    // Include department filter only if it is provided
    if (department && department !== 'All Departments') {
      query += ` AND T1DPNM = :department`;
      queryParams.department = department;
    }

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


