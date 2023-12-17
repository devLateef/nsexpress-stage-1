const mongoose = require('mongoose');
try {
    await mongoose.connect(process.env.DB_CONNECT,() =>{
        console.log('Database connected successfully')
    })
} catch (error) {
    console.log('Error Message: ' + error);
}