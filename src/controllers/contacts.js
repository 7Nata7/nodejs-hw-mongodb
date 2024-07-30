import Contact from '../db/Contacts.js';
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
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const sortBy = req.query.sortBy || 'name';
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

        const filter = {};
        if (req.query.type) {
            filter.contactType = req.query.type;
        }
        if (req.query.isFavourite) {
            filter.isFavourite = req.query.isFavourite === 'true';
        }

        const [contacts, totalItems] = await Promise.all([
            getAll({ 
                filter,
                skip: (page - 1) * perPage, 
                limit: perPage, 
                sort: { [sortBy]: sortOrder } 
            }),
            Contact.countDocuments(filter)
        ]);

        const totalPages = Math.ceil(totalItems / perPage);

        res.status(200).json({
            status: 200,
            message: 'Successfully found contacts!',
            data: {
                data: contacts,
                page,
                perPage,
                totalItems,
                totalPages,
                hasPreviousPage: page > 1,
                hasNextPage: page < totalPages
            }
        });
    } catch (error) {
        console.error('Error in getAllContacts:', error);
        next(error);
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
    } catch (error) {
        console.error(`Error in getContactById (${contactId}):`, error);
        next(error);
    }
};

const createContact = async (req, res, next) => {
    try {
        const { name, phoneNumber, contactType } = req.body;
        if (!name || !phoneNumber || !contactType) {
            throw createError(400, 'All fields are required: name, phoneNumber, contactType');
        }

        const newContact = await create(req.body);
        res.status(201).json({
            status: 201,
            message: 'Successfully created a contact!',
            data: newContact,
        });
    } catch (error) {
        console.error('Error in createContact:', error);
        next(error);
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
    } catch (error) {
        console.error(`Error in updateContact (${contactId}):`, error);
        next(error);
    }
};

const deleteContact = async (req, res, next) => {
    const { contactId } = req.params;
    try {
        const deletedContact = await remove(contactId);
        if (!deletedContact) {
            throw createError(404, 'Contact not found');
        }
        res.status(204).json();
    } catch (error) {
        console.error(`Error in deleteContact (${contactId}):`, error);
        next(error);
    }
};

export default {
    getAllContacts: ctrlWrapper(getAllContacts),
    getContactById: ctrlWrapper(getContactById),
    createContact: ctrlWrapper(createContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact)
};