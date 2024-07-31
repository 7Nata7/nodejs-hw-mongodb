import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
import validateBody from '../middlewares/validateBody.js';
import { contactValidationSchemaPOST } from '../validators/validationSchemas.js';
import isValidId from '../middlewares/isValidId.js'; 

const router = Router();

router.get('/', contactsController.getAllContacts);
router.get('/:contactId', isValidId, contactsController.getContactById);
router.post('/', validateBody([contactValidationSchemaPOST]), contactsController.createContact);
router.patch('/:contactId', isValidId, contactsController.updateContact);
router.delete('/:contactId', isValidId, contactsController.deleteContact);

export default router;