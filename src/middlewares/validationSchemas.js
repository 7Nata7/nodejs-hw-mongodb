import { checkSchema } from 'express-validator';

export const contactValidationSchema = checkSchema({
    name: {
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: 'Name should be between 3 and 20 characters',
        },
        exists: {
            errorMessage: 'Name is required',
        }
    },
    phoneNumber: {
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: 'Phone Number should be between 3 and 20 characters',
        },
        exists: {
            errorMessage: 'Phone Number is required',
        }
    },
    contactType: {
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: 'Contact Type should be between 3 and 20 characters',
        },
        exists: {
            errorMessage: 'Contact Type is required',
        }
    },
});