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

    const { userEPF, deptOrBranch, ideadate, name, userIdea } = req.body;

    console.log('Executing Insert Query');
    const result = await connection.execute(
      `INSERT INTO INTRANET.IDEA_HUB_TBL (ID, USEREPF, DEPTORBRANCH, IDEADATE, NAME, USERIDEA) 
       VALUES (SLI_APPS.IDEA_HUB_TBL_SEQ.NEXTVAL,:userEPF, :deptOrBranch, TO_DATE(:ideadate, 'YYYY-MM-DD'), :name, :userIdea)`,
      { 
        userEPF: userEPF,
        deptOrBranch: deptOrBranch,
        ideadate: ideadate, // Ensure the date is in 'YYYY-MM-DD' format
        name: name,
        userIdea: userIdea
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

// GET request to fetch all records
router.get('/fetchideas', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: 'ais',
      password: 'ais',
      connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
    });

    console.log('Executing Select Query');
    const result = await connection.execute(
       `SELECT ID, USEREPF, DEPTORBRANCH, TO_CHAR(IDEADATE, 'YYYY-MM-DD') AS IDEADATE, NAME, USERIDEA
       FROM INTRANET.IDEA_HUB_TBL
       ORDER BY IDEADATE DESC`
    );

    console.log('Select Result:', result.rows);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data: ' + err.message);
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

router.delete('/deleteIdeaHub/:id', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: 'ais',
      password: 'ais',
      connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
    });

    const { id } = req.params;
    const result = await connection.execute(
      `DELETE FROM INTRANET.IDEA_HUB_TBL WHERE ID = :id`,
      [id],
      { autoCommit: true }
    );

    res.status(200).send('Idea deleted successfully');
  } catch (err) {
    console.error('Error deleting data:', err);
    res.status(500).send('Error deleting data: ' + err.message);
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