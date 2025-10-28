const express = require('express');
const cors = require('cors');
const bodyParser = require('express').json;
const path = require('path');
require('dotenv').config();

const { connect } = require('./db');
const experienceRoutes = require('./routes/experiences');
const bookingRoutes = require('./routes/bookings');
const promoRoutes = require('./routes/promo');

const app = express();
app.use(cors());
app.use(bodyParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/promo', promoRoutes);

const port = process.env.PORT || 4000;

connect().then(() => {
  app.listen(port, () => console.log(`✅ Server running on ${port}`));
}).catch(err => {
  console.error('❌ Failed to connect to DB', err);
  process.exit(1);
});
