import { Router } from 'express';
import authController from '../controllers/auth.js';
import validateBody from '../middlewares/validateBody.js';
import { userValidationSchemaPOST, userValidationSchemaLogin } from '../validators/authValidationSchema.js'; // Імпортуємо новий валідатор
import authenticate from '../middlewares/authenticate.js';


const authRouter = Router();

authRouter.post('/register', validateBody(userValidationSchemaPOST), authController.registerUser);
authRouter.post('/login', validateBody(userValidationSchemaLogin), authController.loginUser);
authRouter.post('/refresh', authController.refreshSession);
authRouter.post('/logout', authenticate, authController.logoutUser);

export default authRouter;