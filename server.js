const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');


app.use(express.static(path.join(__dirname, '.', 'client', 'build')));

// app.get('/getNumber', (req, res)=>{
//     res.send({number:'hillel'})
// })

// fetch('http://www.google.com')
// .then(r=>console.log(r))



const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

