const express =require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/user');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const config = require('./config/key');
mongoose.connect(config.mongoURI,
{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...!'))
   .catch(err => console.log(err));
   
app.get('/',(req,res)=> res.send('Hello world!!'));

app.post('/register', (req,res) => {

    const user = new User(req.body);
    user.save((err, userInfo)=>{
        if(err) return res.json({success: false, err});
    return res.status(200).json({
        success: true
    });
    });
});




app.listen(port,()=>console.log(`example app listening on port! ${port}`));

