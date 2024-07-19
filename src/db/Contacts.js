import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String },
  isFavourite: { type: Boolean, default: false },
  contactType: {
    type: String,
    required: true,
    default: 'personal',
    enum: ['work', 'home', 'personal'],
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact; 