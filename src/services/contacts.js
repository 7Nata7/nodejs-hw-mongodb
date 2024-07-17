// import Contact from '../models/Contacts.js';

// export const getAllContacts = async () => {
//   return await Contact.find({});
// };

// export const getContactById = async (id) => {
//   return await Contact.findById(id);
// };

import ContactModel from '../models/Contacts.js';

export const getAllContacts = async () => {
  return await ContactModel.find();
};

export const getContactById = async (contactId) => {
  return await ContactModel.findById(contactId);
};