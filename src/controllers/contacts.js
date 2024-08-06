import Contact from '../db/Contacts.js';
import createHttpError from 'http-errors';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const getAllContacts = async (req, res) => {
  const userId = req.user._id; // Отримуємо `userId` з авторизованого користувача
  const contacts = await Contact.find({ userId }); // Знайдемо всі контакти цього користувача
  res.status(200).json(contacts);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const contact = await Contact.findOne({ _id: id, userId }); // Отримуємо контакти конкретного користувача
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json(contact);
};

const createContact = async (req, res) => {
  const { name, email, phoneNumber, contactType, isFavorite } = req.body;
  const userId = req.user._id; // Додаємо `userId` до нового контакту

  const newContact = new Contact({
    name,
    email,
    phoneNumber,
    contactType,
    isFavorite,
    userId, // Додаємо `userId` до нового контакту
  });

  await newContact.save();

  res.status(201).json({
    status: 'success',
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const { name, email, phoneNumber, contactType, isFavorite } = req.body;

  const updatedContact = await Contact.findOneAndUpdate(
    { _id: id, userId }, // Переконуємося, що оновлюємо лише контакти автора
    { name, email, phoneNumber, contactType, isFavorite },
    { new: true }
  );

  if (!updatedContact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 'success',
    message: 'Successfully updated the contact!',
    data: updatedContact,
  });
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const deletedContact = await Contact.findOneAndDelete({ _id: id, userId }); // Переконуємося, що видаляємо лише контакти автора

  if (!deletedContact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 'success',
    message: 'Successfully deleted the contact!',
    data: deletedContact,
  });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
};