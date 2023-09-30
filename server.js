const app = require('./app');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/ProductDB')
  .then(() => {
    // سرور Express را راه‌اندازی کنید
    app.listen(8000, () => {
      console.log(`Server is running on port 8000`);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
