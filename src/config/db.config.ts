import { connect, set } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/volcanoes';

const connectDB = async () => {
    try {
        set('runValidators', true);
        await connect(MONGO_URI);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;
