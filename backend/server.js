

const PORT = process.env.PORT || 5000;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{ app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('MongoDB connected')
  });})
  .catch((err) => console.log(err));



