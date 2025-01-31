import { validationResult } from 'express-validator';

const validateBody = (schema) => {
    return async (req, res, next) => {
        await Promise.all(schema.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ status: 'error', code: 400, errors: errors.array() });
    };
};

export default validateBody;