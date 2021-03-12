const express = require('express')
const app = express();
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.static('public'))


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
    const { day, RoundCounter } = req.body
    await Tens.updateOne({ Type: day }, { Roundsonthetable: RoundCounter })
    const deta = await Tens.find({ Type: day })
    res.send({ deta })
})


app.post('/savetime', async (req, res) => {
    const { timeLength, cosher, Tables, baking, radio } = req.body
    await Tens.replaceOne({ Type: radio }, { cosher, Tables, baking, timeLength, Type: radio, Roundsonthetable: 0 })
    const deta = await Tens.find({})
    res.send({ deta })
})


app.post('/gettyperadio', async (req, res) => {
    const { Type } = req.body
    const deta = await Tens.find({ Type })
    res.send({ deta })
})


app.get('*', (req,res) =>{
    res.send('<h1 style="text-align: center"><a href="/" style="color: rgb(82, 24, 24)">דף 404 לחץ כאן לחזרה</a></h1>')
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})

