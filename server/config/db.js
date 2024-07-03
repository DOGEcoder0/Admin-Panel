const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Dhar2003:xQnX1jESNh5W6YKA@cluster0.vf3vs0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
