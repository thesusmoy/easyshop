const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})