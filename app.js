const mongoose = require("mongoose")
const express = require("express")
const userRoute = require("./Routes/userRoute")
const blogRoute = require("./Routes/blogRoute")
require('dotenv/config')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)



app.listen(process.env.PORT)

async function DB() {
    try {
       const res = await mongoose.connect(process.env.DB)
       const data = res.STATES.connected
       console.log(data);
        
    } catch (error) {
        return error.message
    }
}
DB()