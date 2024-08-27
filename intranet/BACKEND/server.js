
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const salesLeadRoutes = require('./Route/salesLeads');
const ideaHubRoutes = require('./Route/ideaHub');
const contactSearchRoutes = require('./Route/contactSearchRoutes'); // Import the new routes
const branchSearchRoutes = require('./Route/branchSearchRoutes');

const app = express();
const port = process.env.PORT || 10155;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware


// Use the routes
app.use('/api/salesLead', salesLeadRoutes); // Use the salesLead routes
app.use('/api/ideaHub', ideaHubRoutes);
app.use('/api/contactSearch', contactSearchRoutes); // Use the new contactSearch routes
app.use('/api/branchSearch', branchSearchRoutes);

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  await db.initialize(); // Initialize Oracle DB connection pool
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  try {
    await db.close();
    console.log('Connection pool closed');
    process.exit(0);
  } catch (err) {
    console.error('Error during pool close: ' + err.message);
    process.exit(1);
  }
});