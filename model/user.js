const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    track: {
        type: String,
        require: true
    },
    lang: {
        type: String,
        require: true
    },
    stage: {
        type: String,
        require: true
    }
},
{
    timestamp: true
});

const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;