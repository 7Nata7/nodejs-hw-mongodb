// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });

// const Contact = mongoose.model('Contact', contactSchema);

// export default Contact;

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;