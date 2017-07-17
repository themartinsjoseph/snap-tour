const https = require('https');
const util = require('util');
const EventEmitter = require('events');

export default class TourSchedule extends EventEmitter {
    getTourSchedule(artistName) {
        let resBody = '';

        https.get('https://api.bandsintown.com/artists/' + artistName + '/events.json?api_version=2.0&app_id=snapTour', (res) => {
            res.on('data', (chunk) => {
                resBody += chunk;
            });
            res.on('end', () => {
                this.emit('end', resBody);
            });
        });
    }
}