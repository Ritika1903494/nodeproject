const mongoose=require("mongoose")

const EmpSchema= new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default:0
    },
    role:{
        type:String,
        required:true
    }
})

const Emp = mongoose.model("Emp",EmpSchema)

module.exports = Emp