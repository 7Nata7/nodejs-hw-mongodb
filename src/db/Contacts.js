// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const contactSchema = new Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//   },
//   phone: {
//     type: String,
//     required: [true, 'Phone is required'],
//   },
// });

// const Contact = mongoose.model('Contact', contactSchema);

// export default Contact;

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