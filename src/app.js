const express = require('express');
const app = express();
const tourScheduleRouter = require('./controllers/tour_controller');

app.use('/', tourScheduleRouter);

app.listen(8080, () => {
    console.log('Listening on 8080');
});