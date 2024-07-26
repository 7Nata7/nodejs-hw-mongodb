import {
  getAllContacts as getAll,
  getContactById as getById,
  createContact as create,
  updateContact as update,
  deleteContact as remove
} from '../services/contacts.js';
import createError from 'http-errors';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const getAllContacts = async (req, res, next) => {
  console.log("Get All Contacts triggered");
  try {
    const contacts = await getAll();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    console.error('Error in getAllContacts:', error);
    throw error;
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  console.log(`Get Contact By ID triggered for ID: ${contactId}`);
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
  } catch (error) {
    console.error(`Error in getContactById (${contactId}):`, error);
    throw error;
  }
};

const createContact = async (req, res, next) => {
  console.log("Create Contact triggered with data:", req.body);
  try {
    const newContact = await create(req.body);
    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data: newContact,
    });
  } catch (error) {
    console.error('Error in createContact:', error);
    throw error;
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  console.log(`Update Contact triggered for ID: ${contactId}`);
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
  } catch (error) {
    console.error(`Error in updateContact (${contactId}):`, error);
    throw error;
  }
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  console.log(`Delete Contact triggered for ID: ${contactId}`);
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
  } catch (error) {
    console.error(`Error in deleteContact (${contactId}):`, error);
    throw error;
  }
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact)
};