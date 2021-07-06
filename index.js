const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000

mongoose.connect('mongodb+srv://user:whffkaos@youtube.zuiag.mongodb.net/test?authSource=admin&replicaSet=atlas-m82526-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

