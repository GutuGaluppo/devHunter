const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://GutuGaluppo:devHunter@cluster0-okxkw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json()); //req com corpor no formato json
app.use(routes);

app.listen(3333);