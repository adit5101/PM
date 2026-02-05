const app = require('./app');
const sequelize = require('./config/database');

const PORT = 5000;
// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

