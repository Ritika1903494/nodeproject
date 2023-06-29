const express= require("express");
const mongoose= require("mongoose");
//const Router=require("./routes/routes")
const Router=require("./routes/emp_route")
const cors=require('cors')
const bodyParser = require('body-parser');

//"mongodb+srv://narkaur:tj3RiZdyXD966clL@cluster0.utw3lfq.mongodb.net/usersdb?retryWrites=true&w=majority" 
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/usersdb',
//mongoose.connect('mongodb+srv://narkaur:tj3RiZdyXD966clL@cluster0.utw3lfq.mongodb.net/usersdb?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology:true
}
)

const db=mongoose.connection
db.on("error",console.error.bind(console,"connection error: "))
db.once("open",function(){
    console.log("Connected Successfully")
})
app.use(Router)
app.listen(8081,()=>{
    console.log("Server is running at port 8081")
})