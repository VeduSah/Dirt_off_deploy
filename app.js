const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

dotenv.config();

const connectDB = require('./src/config/db');
const CustomerRoutes = require('./src/routes/CustomerRoutes');
const ServiceRoutes = require('./src/routes/ServiceRoutes');
const StaffRoutes = require('./src/routes/StaffRoutes');
const CustomerdRoutes = require('./src/routes/CustomerdRoutes');
const ProductRoutes = require('./src/routes/ProductRoutes');
const NewEntry = require('./src/routes/NewentryRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // make sure this avoids reconnecting on every request

app.get('/', (req, res) => {
  res.send('✅ Your site is live and working!');
});

app.use('/customer', CustomerRoutes);
app.use('/service', ServiceRoutes);
app.use('/staff', StaffRoutes);
app.use('/custdirt', CustomerdRoutes);
app.use('/product', ProductRoutes);
app.use('/entry', NewEntry);

// Do NOT call app.listen(...)
// Instead export it:
module.exports = app;
module.exports.handler = serverless(app);
