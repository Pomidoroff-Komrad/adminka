const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

const PORT = 3000;
const app = express();
const corse = require("./middlewares/corse")

app.use(
    corse,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})