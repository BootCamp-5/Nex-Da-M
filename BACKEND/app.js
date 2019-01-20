const express = require('express');
const app = express();
const port = 8080;

const index = require('./routes/index');
const movies = require('./routes/movies');


app.use('/index', index);
app.use('/api/movies', movies);

app.get('/', (req, res, next) => {
    res.redirect('/index');
    // res.send("ok!!!");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
