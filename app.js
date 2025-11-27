const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for health check
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express API Server',
    timestamp: new Date().toISOString(),
    status: 'running'
  });
});

// Handle 404 - Not Found (FIXED VERSION)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

module.exports = app;