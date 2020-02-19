import  * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema: any = {
    firstName: {
        type: String,
        required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
}

export const ContactSchema = new mongoose.Schema(schema);
