const app = require('./app');
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//setting up config file
dotenv.config({path: "backend/config/config.env"});

//connecting to database
connectDatabase();

app.get("/", (req,res) => {
    res.send("welcome to your Server.");
});


app.listen(process.env.PORT, () => {
    console.log(`your server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
});

console.log("hello world")