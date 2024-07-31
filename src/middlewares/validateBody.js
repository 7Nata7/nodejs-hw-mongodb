import { validationResult } from 'express-validator';

const validateBody = (schemas) => {
    return async (req, res, next) => {
        await Promise.all(schemas.map((schema) => schema.run(req)));

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                status: 'error', 
                code: 400, 
                errors: errors.array() 
            });
        }

        next();
    };
};

export default validateBody;