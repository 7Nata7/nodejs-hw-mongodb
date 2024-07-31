import { checkSchema } from 'express-validator';

export const contactValidationSchemaPOST = checkSchema({
    name: {
        in: ['body'],
        isLength: {
            options: { min: 3 },
            errorMessage: 'Name should be at least 3 characters',
        },
        errorMessage: 'Name is required',
        trim: true,
    },
    phoneNumber: {
        in: ['body'],
        matches: {
            options: [/^\+\d{10,14}$/],
            errorMessage: 'Phone number should be valid',
        },
        errorMessage: 'Phone number is required',
    },
    contactType: {
        in: ['body'],
        isString: true,
        errorMessage: 'Contact type is required',
    },
    email: {
        in: ['body'],
        isEmail: {
            bail: true,
            errorMessage: 'Email should be a valid email address',
        },
        optional: { nullable: true, checkFalsy: true },
    },
    isFavorite: {
        in: ['body'],
        isBoolean: {
            errorMessage: 'isFavorite must be a boolean',
        },
        optional: { nullable: true, checkFalsy: true },
    },
});