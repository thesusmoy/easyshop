const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, function (err) { 
        if (err) throw err; console.log('Successfully connected');
     });

}

module.exports = connectDatabase;