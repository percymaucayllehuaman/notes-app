const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//mongodb://127.0.0.1:27017/
mongoose.connect('mongodb://127.0.0.1:27017/notes', {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useFindAndModify: true
}).then(db => console.log('DB is connected'))
.catch(error => console.error("Error-> "+error));