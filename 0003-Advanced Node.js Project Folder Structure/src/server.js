// project-root/src/server.js
const app = require('./app');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');
const { log } = require('./utils/logger');
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => log(`Server running on port ${PORT}`));
});