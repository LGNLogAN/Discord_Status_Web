const express = require('express');
const app = express();
const port = 3594
const fs = require('fs');
var cors = require("cors");


app.use(cors());

app.get('/discordAPI',(req , res) => {
    fs.readFile('./Main_Web_Project/JSON_File/channelInfo.json','utf8' , (err,data) => {
        if(err){
            console.error('Error reading JSON file:', err);
            res.status(500).send('Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.listen(port , () => {
    console.log("실행 완료");
})