import Contact from '../db/Contacts.js';

const getAllContacts = async (req, res) => {
    const { page = 1, perPage = 10, sortBy = 'name', sortOrder = 'asc' } = req.query;

    const skip = (page - 1) * perPage;

    try {
        const totalItems = await Contact.countDocuments();
        const totalPages = Math.ceil(totalItems / perPage);

        const contacts = await Contact.find()
            .skip(skip)
            .limit(parseInt(perPage))
            .sort({ [sortBy]: sortOrder });

        res.status(200).json({
            status: 200,
            message: "Successfully found contacts!",
            data: {
                data: contacts,
                page: parseInt(page),
                perPage: parseInt(perPage),
                totalItems,
                totalPages,
                hasPreviousPage: page > 1,
                hasNextPage: page < totalPages
            }
        });
    } catch (error) {
        res.status(500).json({ status: 'error', code: 500, message: error.message });
    }
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).json({ status: 'error', code: 404, message: 'Contact not found' });
        }
        res.status(200).json({ status: 'success', code: 200, data: { contact } });
    } catch (error) {
        res.status(500).json({ status: 'error', code: 500, message: error.message });
    }
};

const createContact = async (req, res) => {
    const { name, phoneNumber, email, isFavorite, contactType } = req.body;
    try {
        const newContact = new Contact({
            name,
            phoneNumber,
            email,
            isFavorite: isFavorite ?? false,
            contactType: contactType ?? 'personal'
        });
        await newContact.save();
        res.status(201).json({ status: 'success', code: 201, data: { newContact } });
    } catch (error) {
        res.status(500).json({ status: 'error', code: 500, message: error.message });
    }
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const { name, phoneNumber, email, isFavorite, contactType } = req.body;

    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            contactId,
            { name, phoneNumber, email, isFavorite, contactType },
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ status: 'error', code: 404, message: 'Contact not found' });
        }

        res.status(200).json({ status: 'success', code: 200, data: { updatedContact } });
    } catch (error) {
        res.status(500).json({ status: 'error', code: 500, message: error.message });
    }
};

const deleteContact = async (req, res) => {
    const { contactId } = req.params;

    try {
        const deletedContact = await Contact.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).json({ status: 'error', code: 404, message: 'Contact not found' });
        }

        res.status(200).json({ status: 'success', code: 200, message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ status: 'error', code: 500, message: error.message });
    }
};

export default {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
};