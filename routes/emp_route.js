const express = require("express")
const emp_controller=require("../controllers/emp1")

const cors=require('cors')

const app2=express()
app2.use(cors())

app2.post("/emp_postuser",emp_controller.empPost)
app2.get("/emp_getuser",emp_controller.empGet)
app2.delete("/emp_deleteuser/:_id",emp_controller.empDelete)
app2.put("/emp_updateuser/:_id",emp_controller.empUpdate)
// app2.delete("/emp_deleteuserT/:id",emp_controller.empDeleteT)

module.exports=app2
