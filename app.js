const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

const CustomerRoutes = require('./src/routes/CustomerRoutes');
const ServiceRoutes = require('./src/routes/ServiceRoutes');
const StaffRoutes = require('./src/routes/StaffRoutes');
const CustomerdRoutes = require('./src/routes/CustomerdRoutes');
const ProductRoutes = require('./src/routes/ProductRoutes');
const NewEntry = require('./src/routes/NewentryRoutes');
const allowedOrigins = [
  "http://localhost:5173",
 "https://dirt-deploy.vercel.app",

  "http://127.0.0.1:5173",
  "https://dirt-off-dep.vercel.app",
  "https://dirt-off-de.onrender.com",
];

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

// 👇 Add this route for root
app.get('/', (req, res) => {
  res.send('✅ Your site is live and working!');
});

// Register API routes
app.use('/customer', CustomerRoutes);
app.use('/service', ServiceRoutes);
app.use('/staff', StaffRoutes);
app.use('/custdirt', CustomerdRoutes);
app.use('/product', ProductRoutes);
app.use('/entry', NewEntry);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
