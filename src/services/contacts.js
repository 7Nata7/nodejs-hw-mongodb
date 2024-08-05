import Contact from '../db/Contacts.js';

export const getAllContacts = async ({ filter, skip, limit, sort }) => {
    const contacts = await Contact.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort);
    return contacts;
};

export const getContactById = async (contactId) => {
    return await Contact.findById(contactId);
};

export const createContact = async (contactData) => {
    const contact = new Contact(contactData);
    return await contact.save();
};

export const updateContact = async (contactId, updateData) => {
    return await Contact.findByIdAndUpdate(contactId, updateData, { new: true });
};

export const deleteContact = async (contactId) => {
    return await Contact.findByIdAndDelete(contactId);
};