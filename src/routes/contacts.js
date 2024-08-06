import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
import validateBody from '../middlewares/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import authenticate from '../middlewares/authenticate.js';
import { contactValidationSchemaPOST, contactValidationSchemaPATCH, contactValidationSchemaPUT } from '../validators/validationSchemas.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', contactsController.getAllContacts);
contactsRouter.get('/:contactId', isValidId, contactsController.getContactById);
contactsRouter.post('/', validateBody(contactValidationSchemaPOST), contactsController.createContact);
contactsRouter.put('/:id', validateBody(contactValidationSchemaPUT), contactsController.updateContact);
contactsRouter.patch('/:contactId', isValidId, validateBody(contactValidationSchemaPATCH), contactsController.updateContact);
contactsRouter.delete('/:id', contactsController.deleteContact);
contactsRouter.delete('/:contactId', isValidId, contactsController.deleteContact);

export default contactsRouter;