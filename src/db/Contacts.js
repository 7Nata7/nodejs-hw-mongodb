import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    contactType: {
        type: String,
        required: [true, 'Contact type is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
});

const Contact = model('Contact', contactSchema);

export default Contact;