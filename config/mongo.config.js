const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://anshumannehru:steamtroops2002@cluster0.esqhxtz.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDb connection established`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB