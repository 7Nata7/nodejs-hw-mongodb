import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone Number is required'],
  },
  contactType: {
    type: String,
    required: [true, 'Contact Type is required'],
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;