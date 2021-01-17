const express = require('express');
const app = express();
const port =3333;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://younghoon:1234asdf@boilerplate.liyh5.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get('/', (req,res) => res.send("Hello woald!!!") );
app.listen(port, () => console.log(`Express app listening on port ${port}`));


