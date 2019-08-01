const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api',require('./api/userapi'));

app.use((req,res)=>{
    res.send('U Have Type Something Wrong...');
})
console.log('App ',typeof app, 'Express ',typeof express);
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
    console.log('Server Start');
    }
})