import ContactSchema from '../db/Contacts.js';

export const getAllContacts = async () => {
  return await ContactSchema.find();
};

export const getContactById = async (contactId) => {
  return await ContactSchema.findById(contactId);
};