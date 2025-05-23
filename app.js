const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB = require('./src/config/db');


const CustomerRoutes=require('./src/routes/CustomerRoutes');
const ServiceRoutes=require('./src/routes/ServiceRoutes')
const StaffRoutes=require('./src/routes/StaffRoutes')
const CustomerdRoutes=require('./src/routes/CustomerdRoutes')
const  ProductRoutes=require('./src/routes/ProductRoutes')
const NewEntry=require('./src/routes/NewentryRoutes')
const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const PORT=process.env.PORT || 5000;


app.use('/customer',CustomerRoutes);
app.use('/service',ServiceRoutes);
app.use('/staff',StaffRoutes);
app.use('/custdirt',CustomerdRoutes);
app.use('/product',ProductRoutes);
app.use('/entry',NewEntry);
app.get('/', (req, res) => {
  res.send('✅ Your site is live and working!');
});

app.listen(PORT,()=>{
    console.log(" 🚀  Server started on port 5000");
})