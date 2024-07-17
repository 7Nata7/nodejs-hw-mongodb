import ContactModel from '../models/Contacts.js';

export const getAllContacts = async () => {
  return await ContactModel.find();
};

export const getContactById = async (contactId) => {
  return await ContactModel.findById(contactId);
};