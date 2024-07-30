import { validationResult } from 'express-validator';
import createError from 'http-errors';

const validateBody = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(createError(400, 'Validation Error', { errors: errors.array() }));
        }
        next();
    };
};

export default validateBody;