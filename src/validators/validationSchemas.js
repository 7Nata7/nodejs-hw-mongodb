// import { body } from 'express-validator';

// export const contactValidationSchemaPOST = [
//     body('name')
//         .isString().withMessage('Name must be a string')
//         .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long')
//         .notEmpty().withMessage('Name is required'),
//     body('phoneNumber')
//         .isString().withMessage('Phone number must be a string')
//         .isLength({ min: 3, max: 20 }).withMessage('Phone number must be between 3 and 20 characters long')
//         .notEmpty().withMessage('Phone number is required'),
//     body('email')
//         .optional()
//         .isEmail().withMessage('Email must be a valid email address'),
//     body('isFavorite')
//         .optional()
//         .isBoolean().withMessage('isFavorite must be a boolean'),
//     body('contactType')
//         .isString().withMessage('contactType must be a string')
//         .isIn(['work', 'home', 'personal']).withMessage('contactType must be one of: work, home, personal')
// ];

// export const contactValidationSchemaPATCH = [
//     body('name')
//         .optional()
//         .isString().withMessage('Name must be a string')
//         .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long'),
//     body('phoneNumber')
//         .optional()
//         .isString().withMessage('Phone number must be a string')
//         .isLength({ min: 3, max: 20 }).withMessage('Phone number must be between 3 and 20 characters long'),
//     body('email')
//         .optional()
//         .isEmail().withMessage('Email must be a valid email address'),
//     body('isFavorite')
//         .optional()
//         .isBoolean().withMessage('isFavorite must be a boolean'),
//     body('contactType')
//         .optional()
//         .isString().withMessage('contactType must be a string')
//         .isIn(['work', 'home', 'personal']).withMessage('contactType must be one of: work, home, personal')
// ];

import { body } from 'express-validator';

export const contactValidationSchemaPOST = [
    body('name')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long')
        .notEmpty().withMessage('Name is required'),
    body('phoneNumber')
        .isString().withMessage('Phone number must be a string')
        .isLength({ min: 3, max: 20 }).withMessage('Phone number must be between 3 and 20 characters long')
        .notEmpty().withMessage('Phone number is required'),
    body('email')
        .optional()
        .isEmail().withMessage('Email must be a valid email address'),
    body('isFavorite')
        .optional()
        .isBoolean().withMessage('isFavorite must be a boolean'),
    body('contactType')
        .isString().withMessage('Contact type must be a string')
        .isIn(['work', 'home', 'personal']).withMessage('Contact type must be one of: work, home, personal')
];

export const contactValidationSchemaPATCH = [
    body('name')
        .optional()
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long'),
    body('phoneNumber')
        .optional()
        .isString().withMessage('Phone number must be a string')
        .isLength({ min: 3, max: 20 }).withMessage('Phone number must be between 3 and 20 characters long'),
    body('email')
        .optional()
        .isEmail().withMessage('Email must be a valid email address'),
    body('isFavorite')
        .optional()
        .isBoolean().withMessage('isFavorite must be a boolean'),
    body('contactType')
        .optional()
        .isString().withMessage('Contact type must be a string')
        .isIn(['work', 'home', 'personal']).withMessage('Contact type must be one of: work, home, personal')
];