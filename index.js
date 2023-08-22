const express = require("express")
const {connection} = require("./db")
require("dotenv").config();
const cors = require("cors");
const {userRouter} = require("./route/user.routes")
const {doctorRouter} = require("./route/doctor.route")
const {auth} = require("./middleware/auth")

const app = express()

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user",userRouter)
app.use("/doctor",auth,doctorRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log('DB is connected')
    } catch (error) {
        console.log('Server is not connected')
    }
    console.log(`Server is connected at port ${process.env.PORT}`)
})