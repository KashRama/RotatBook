const express = require('express');
const cors = require('cors');
const request = require('request');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

app.post('/test', (req, res) => {
    app.locals.shelfID = req.body.shelfID
})

app.get('/test', (req, res) => {
    res.json(app.locals.shelfID)
})