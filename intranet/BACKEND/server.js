

// const express = require('express');
// const oracledb = require('oracledb');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors package
// // const salesLeadRoutes = require('./Route\/salesLeads'); // Import the routes
// const salesLeadRoutes = require('./Route/salesLeads');
// const ideaHubRoutes = require('./Route/ideaHub');
// const contactRoutes = require('./Route/contactRoutes');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors()); // Use the cors middleware

// // Oracle DB connection configuration
// const dbConfig = {
//   user: 'ais',                          // User ID
//   password: 'ais',                      // Password
//   connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))' // Connection string
// };

// // Connect to Oracle DB
// async function initialize() {
//   try {
//     await oracledb.createPool(dbConfig);
//     console.log('Connection pool started');
//   } catch (err) {
//     console.error('init() error: ' + err.message);
//   }
// }

// // Use the routes
// app.use('/api/salesLead', salesLeadRoutes); // Use the salesLead routes
// app.use('/api/ideaHub', ideaHubRoutes);
// app.use('/api/contact', contactRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
//   initialize();
// });





const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');
const salesLeadRoutes = require('./Route/salesLeads');
const ideaHubRoutes = require('./Route/ideaHub');
const contactRoutes = require('./Route/contactRoutes');
const contactSearchRoutes = require('./Route/contactSearchRoutes'); // Import the new routes

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// Oracle DB connection configuration
const dbConfig = {
  user: 'ais',
  password: 'ais',
  connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.90.20)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=BEELIFE)))'
};

// Connect to Oracle DB
async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Connection pool started');
  } catch (err) {
    console.error('init() error: ' + err.message);
  }
}

// Use the routes
app.use('/api/salesLead', salesLeadRoutes); // Use the salesLead routes
app.use('/api/ideaHub', ideaHubRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/contactSearch', contactSearchRoutes); // Use the new contactSearch routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  initialize();
});