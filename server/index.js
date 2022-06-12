const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/notes', router);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://root:root@cluster0.crue6xu.mongodb.net/?retryWrites=true&w=majority'
    );

    app.listen(PORT, () => {
      console.log('server started at port ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
