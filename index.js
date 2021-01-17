const express = require('express');
const app = express();
const port =3333;
const bodyParser = require("body-parser");
const {User} = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//json 파일로 받아온걸 분석


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false
}).then(() => console.log("MongoDB connected!!!"))
.catch(err => console.log(err));

app.get('/', (req,res) => res.send("서버가 실행되었습니다.") );


app.post('/register', (req,res) => {
    //회원가입 할떄 팔요한 정보들을 클라이언트에서 가져오면
    //데이터 베이스에 넣어준다.

    const user = new User(req.body);
    user.save((err,userInfo) => {
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        })
    })

})



app.listen(port, () => console.log(`Express app listening on port ${port}`));


