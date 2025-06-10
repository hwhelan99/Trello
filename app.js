var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors({ origin: 'https://trello.com' }));
app.use(express.static('public'));

const listener = app.listen(22, function () {
    console.info(`Node Version: ${process.version}`);
    console.log(`Trello Power-Up Server listening on port ${listener.address().port}`);
});