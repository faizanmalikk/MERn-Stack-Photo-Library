const express = require('express')
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieaParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const logger = require("morgan");


//config
if(process.env.NODE_ENV !== 'PRODUCTION'){

    require('dotenv').config({path : './config.env'})
}

app.use(logger("dev"));
app.use(bodyParser.json({limit: "50mb"}));
app.use(express.json())
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.set("trust proxy", 1)

app.use(cookieaParser())

app.use(cors({
    credentials: true,
    origin: [process.env.APP_URL] 
}))


app.use(fileUpload({useTempFiles:true}))

 // import routes
 const user = require('./routes/userRoute')
 const pin = require('./routes/pinRoute')

 app.use('/api' ,  user)
 app.use('/api' ,  pin)


 app.use(express.static(path.join(__dirname,'./frontend/build')))

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'./frontend/build/index.html'))
 })

// Middleware for errors
app.use(errorMiddleware)

module.exports = app
