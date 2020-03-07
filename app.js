const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));
const playStore = require('./playStore.js');
app.get('/apps', (req, res) => {
    const { sort, genre } = req.query;
    console.log(req.query)
    
    // catches and returns error
    if (sort) {
        if (!['app', 'rating'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be one of rating or app');
        }
    }

    if (genre) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
            return res
                .status(400)
                .send('Gere must be one of Action, Puzzle, Strategy, Casual, Arcade, or Card');
        }
    }

    let results = playStore
        .filter(app =>{
            console.log(app, 'app');
            console.log(app.Genres.toLowerCase());
            console.log(genre.toLowerCase());
            console.log(app.Genres.toLowerCase().includes(genre.toLowerCase()));
            return app
                .Genres
                .toLowerCase()
                .includes(genre.toLowerCase())
        })
    res
        .json(results)
});
    
app.listen(8000, () => {
    console.log('Server started on PORT 8000');
});