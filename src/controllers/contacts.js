import {
  getAllContacts as getAll,
  getContactById as getById,
  createContact as create,
  updateContact as update,
  deleteContact as remove
} from '../services/contacts.js';
import createError from 'http-errors';

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await getAll();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await getById(contactId);
    if (!contact) {
      throw createError(404, 'Contact not found');
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};

const createContact = async (req, res, next) => {
  try {
    const newContact = await create(req.body);
    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data: newContact,
    });
  } catch (err) {
    next(err);
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const updatedContact = await update(contactId, req.body);
    if (!updatedContact) {
      throw createError(404, 'Contact not found');
    }
    res.status(200).json({
      status: 200,
      message: 'Successfully patched a contact!',
      data: updatedContact,
    });
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const deletedContact = await remove(contactId);
    if (!deletedContact) {
      throw createError(404, 'Contact not found');
    }
    res.status(200).json({
      status: 200,
      message: 'Successfully deleted the contact!',
      data: deletedContact,
    });
  } catch (err) {
    next(err);
  }
};

export {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};