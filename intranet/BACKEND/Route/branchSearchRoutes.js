
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

router.post('/searchBranch', async (req, res) => {
  const { branch } = req.body;
  console.log('Search Request Body:', req.body); // Log request body

  let connection;

  try {
    connection = await db.getConnection();
    console.log('Connected to Oracle DB');

    let query = `
      SELECT BRNAME AS Branch, BRADD1 AS Add1, BRADD2 AS Add2, BRADD3 AS Add3, BREMAIL AS BranchMail, BRSMG AS SalesMgr,
             SMEMAIL AS SMmail, BRAOEM AS AdminMail, RMMGRL AS RMLife, RMEMIL AS RMLmail, RMMGRG AS RMGeneral, RMEMIG AS RMGmail,
             BMMGRL AS ManagerLife, BMEMIL AS ManagerLifeMail, BMMGRG AS ManagerGeneral, BMEMIG AS ManagerGeneralMail,
             BRTEL2 AS FAX, BRINT AS Intercom, BRTEL1 AS Telephone, SMMOBIL AS SMmobile, BAO_MOB_PHONE_NOS AS BAOmobie, RMMLMO AS RMLmobile,
             RMMGMO AS RMGmobile, BMMLMO AS MLmobile, BMMGMO AS MGmobile, BRMGR AS AdminOfficer

      FROM TELEDIR.BRANFILE
      WHERE BRNAME LIKE :varBranch
    `;

    // SQL query parameters
    const queryParams = [ `%${branch}%` ];

    // Log the constructed query and parameters
    console.log('Constructed Query:', query);
    console.log('Query Parameters:', queryParams);

    const result = await connection.execute(query, { varBranch: queryParams[0] });

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
