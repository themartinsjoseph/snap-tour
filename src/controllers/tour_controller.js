const express = require('express');
const tourScheduleRouter = express.Router();

import TourSchedule from '../libs/tour_schedule';

tourScheduleRouter.get('/', (req, res) => {
    const artistName = 'Dan Croll';
    const tourSchedule = new TourSchedule();
    
    tourSchedule.on('end', (data) => {
        res.send(data);
    });

    tourSchedule.getTourSchedule(artistName);
});

module.exports = tourScheduleRouter;