const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require("./routers/userRoutes");
const { Dbconnection } = require('./module/server');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// connect to DB
Dbconnection();

// start server
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
