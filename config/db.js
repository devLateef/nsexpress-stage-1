const mongoose = require('mongoose');

const dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Check if the connection is successfull
        if(mongoose.connection.readyState === 1){
            console.log('Database connected successfully')
        }else{
            console.log('Unable to establish connection to the database')
        }
    } catch (error) {
        console.log('Error connecting to the database:', error.message);
    }
}

module.exports = dbconnect;