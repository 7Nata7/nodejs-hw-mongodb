import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: [true, 'Set email for contact'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Set phone number for contact'],
    },
    contactType: {
        type: String,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;