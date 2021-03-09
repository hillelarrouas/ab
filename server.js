const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname,  'client', 'build')));

const url = "mongodb+srv://hillel:Aa25802580@cluster0.rv8jb.mongodb.net/Matzah";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const Users = mongoose.model('User', {
    name: String,
    password: String,
    email: String,
    phone: String,
    LastSeen: String
});


const Tens = mongoose.model('Tens', {
    baking: String,
    cosher: String,
    Tables: String,
    Roundsonthetable: String,
    id: String,
    timeLength: String,
    Type: String
});



app.post('/getdata', async (req, res) => {
    const { day } = req.body
    const deta = await Tens.find({ Type: day })
    res.send({ deta })
})


app.post('/oupdetRounds', async (req, res) => {
    const { r, day } = req.body
    console.log(r)
    await Tens.updateOne({ Type: day }, { Roundsonthetable: r })
    const deta = await Tens.find({ Type: day })
    res.send({ deta })
})


app.post('/savetime', async (req, res) => {
    const { timeLength, cosher, Tables, baking, radio } = req.body
    const d = await Tens.replaceOne({ Type: radio }, { cosher, Tables, baking, timeLength, Type: radio, Roundsonthetable: 0 })
    console.log(d)
    // const savetime = new Tens({ timeLength, cosher, Tables, baking, Type: radio });
    // await savetime.save().then(doc => console.log(doc)).catch(e => console.log(e));
    const deta = await Tens.find({})
    res.send({ deta })
})


app.post('/gettyperadio', async (req, res) => {
    const { Type } = req.body
    const deta = await Tens.find({ Type })
    res.send({ deta })
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

