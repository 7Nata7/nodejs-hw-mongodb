import Contact from '../models/Contact.js'; // Додайте розширення .js

export const getAllContacts = async () => {
  return await Contact.find({});
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};