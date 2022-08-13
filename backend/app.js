const express = require('express');
const useRouter = require('./routes/users.route')
const app = express();

app.use("/api/users", useRouter);

//Request methods
app.use("/user/:id/name/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    res.send(`id: ${id} and name: ${name}`);
    
})
app.use((req, res) => {
    res.send("error");
})






module.exports = app;

