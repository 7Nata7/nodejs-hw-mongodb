import Joi from 'joi';

// Валідатор для створення контакту (POST)
export const contactValidationSchemaPOST = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.empty': 'Phone number is required',
    'any.required': 'Phone number is required',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
    'any.only': 'Contact type must be one of work, home, or personal',
    'any.required': 'Contact type is required',
  }),
  isFavorite: Joi.boolean().optional().messages({
    'boolean.base': 'isFavorite must be a boolean',
  }),
});

// Валідатор для часткового оновлення контакту (PATCH)
export const contactValidationSchemaPATCH = Joi.object({
  name: Joi.string().optional().messages({
    'string.empty': 'Name must not be empty',
  }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Please provide a valid email address',
  }),
  phoneNumber: Joi.string().optional().messages({
    'string.empty': 'Phone number must not be empty',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').optional().messages({
    'any.only': 'Contact type must be one of work, home, or personal',
  }),
  isFavorite: Joi.boolean().optional().messages({
    'boolean.base': 'isFavorite must be a boolean',
  }),
});

// Валідатор для повного оновлення контакту (PUT)
export const contactValidationSchemaPUT = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.empty': 'Phone number is required',
    'any.required': 'Phone number is required',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
    'any.only': 'Contact type must be one of work, home, or personal',
    'any.required': 'Contact type is required',
  }),
  isFavorite: Joi.boolean().optional().messages({
    'boolean.base': 'isFavorite must be a boolean',
  }),
});