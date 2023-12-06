const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 2000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

app.post('/store', (req, res)=>{
    const data = req.body
    fs.appendFile('letter.txt', JSON.stringify(data), (err)=>{
        if(err) throw err;
        res.send('Response Submitted Successfully');
    })
})

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
});