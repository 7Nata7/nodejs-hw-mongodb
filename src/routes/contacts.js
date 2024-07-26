
// GET https://nodejs-hw-mongodb-2-7pq0.onrender.com/contacts
// GET https://nodejs-hw-mongodb-2-7pq0.onrender.com/contacts/:contactId
// POST https://nodejs-hw-mongodb-2-7pq0.onrender.com/contacts
// PATCH https://nodejs-hw-mongodb-2-7pq0.onrender.com/contacts/:contactId
// DELETE https://nodejs-hw-mongodb-2-7pq0.onrender.com/contacts/:contactId


import { Router } from 'express';
import contactsController from '../controllers/contacts.js';

const router = Router();

router.get('/', contactsController.getAllContacts);
router.get('/:contactId', contactsController.getContactById);
router.post('/', contactsController.createContact);
router.patch('/:contactId', contactsController.updateContact);
router.delete('/:contactId', contactsController.deleteContact);

export default router;

