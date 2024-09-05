import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDatabase;