const express = require('express');
const oracledb = require('oracledb');
const router = express.Router();

const dbConfig = {
  user: 'ais',
  password: 'ais',
  connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
};

async function getContactDetails(name, floor, department) {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM SLI_APPS.TELCHANG WHERE NAME = :name AND FLOOR = :floor AND DEPARTMENT = :department`,
        [name, floor, department],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return result.rows;
    } catch (err) {
      console.error('Error executing query:', err); // Enhanced logging
      throw err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Error closing connection:', err); // Enhanced logging
        }
      }
    }
  }  

router.get('/contacts', async (req, res) => {
  const { name, floor, department } = req.query;
  try {
    const contacts = await getContactDetails(name, floor, department);
    res.json(contacts);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;


// const express = require('express');
// const oracledb = require('oracledb');
// const router = express.Router();

// // Oracle DB connection configuration (reuse the existing one)
// const dbConfig = {
//   user: 'ais',
//   password: 'ais',
//   connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
// };

// // Function to get contact details
// async function getContactDetails(name, floor, department) {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute(
//       `SELECT * FROM SLI_APPS.TELCHANG WHERE NAME = :name AND FLOOR = :floor AND DEPARTMENT = :department`,
//       [name, floor, department],
//       { outFormat: oracledb.OUT_FORMAT_OBJECT }
//     );
//     return result.rows;
//   } catch (err) {
//     console.error('Error executing query: ' + err.message);
//     throw err;
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing connection: ' + err.message);
//       }
//     }
//   }
// }

// // Route to handle GET request
// router.get('/contacts', async (req, res) => {
//   const { name, floor, department } = req.query;
//   try {
//     const contacts = await getContactDetails(name, floor, department);                  
//     res.json(contacts);
//   } catch (err) {
//     res.status(500).send('Internal Server Error');
//   }
// });

// module.exports = router;
