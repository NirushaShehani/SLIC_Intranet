const oracledb = require('oracledb');

const dbConfig = {
  user: 'ais',
  password: 'ais',
  connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
};

// Initialize Oracle Client (Thick mode)
oracledb.initOracleClient({ libDir: 'D:/oracle/instantclient_19_23' }); // Update this path to your Oracle Instant Client directory

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Connection pool started');
  } catch (err) {
    console.error('Initialization error: ' + err.message);
  }
}

async function close() {
  try {
    await oracledb.getPool().close(10);
    console.log('Connection pool closed');
  } catch (err) {
    console.error('Error closing pool: ' + err.message);
  }
}

module.exports = {
  initialize,
  close,
  getConnection: async () => oracledb.getConnection()
};