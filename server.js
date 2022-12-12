const express = require('express');

const app = express();
const path = require('path');
const port = 8000;


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')) 
app.use(express.urlencoded()) 
require('./config/mongoose')

app.use('/', require('./routes/index'))




app.listen(port,(e)=>{
    if(e){
        console.log(e);
        return false;
    }
    console.log('server is running on port ' + port);
});