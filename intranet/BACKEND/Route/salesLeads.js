const express = require('express');
const oracledb = require('oracledb');
const router = express.Router();

// Initialize Oracle Client (Thick mode)
oracledb.initOracleClient({ libDir: 'D:/oracle/instantclient_19_23' }); // Update this path to your Oracle Instant Client directory

// Check mode
console.log('Oracle Client Version:', oracledb.oracleClientVersion); // 0 means Thin mode, >0 means Thick mode

// Endpoint to insert data
router.post('/submit', async (req, res) => {
  let connection;
  try {
    console.log('Received Request Body:', req.body);
    connection = await oracledb.getConnection({
      user: 'ais',
      password: 'ais',
      connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
    });

    const { clientName, contact1, contact2, slicContactName, slicMobile, slicExtension, slicDepartment } = req.body;

    console.log('Executing Insert Query');
    const result = await connection.execute(
      `INSERT INTO SLI_APPS.CLIENT_CONTACT_DATA (CLIENTNAME, CONTACTNO1, CONTACTNO2, STAFFMEMBERNAME, STAFFCONTACTNO, EXTENSION, DEPARTMENT) 
       VALUES (:clientName, :contact1, :contact2, :slicContactName, :slicMobile, :slicExtension, :slicDepartment)`,
      { 
        clientName: clientName,
        contact1: contact1,
        contact2: contact2,
        slicContactName: slicContactName,
        slicMobile: slicMobile,
        slicExtension: slicExtension,
        slicDepartment: slicDepartment 
      },
      { autoCommit: true }
    );

    console.log('Insert Result:', result);

    res.status(200).send('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).send('Error inserting data: ' + err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

module.exports = router;