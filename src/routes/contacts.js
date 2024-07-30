import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
import validateBody from '../middlewares/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import { contactValidationSchema } from '../middlewares/validationSchemas.js';

const router = Router();

router.get('/', contactsController.getAllContacts);
router.get('/:contactId', isValidId, contactsController.getContactById);
router.post('/', validateBody(contactValidationSchema), contactsController.createContact);
router.patch('/:contactId', isValidId, validateBody(contactValidationSchema), contactsController.updateContact);
router.delete('/:contactId', isValidId, contactsController.deleteContact);

export default router;