const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": "le nom d'utilisateur doit être une chaîne",
    "string.empty": "le nom d'utilisateur ne peut pas être vide",
    "string.min": "le nom d'utilisateur doit contenir au moins 3 caratères",
    "string.max": "le nom d'utilisateur doit contenir au maximum 30 caractères",
    "any.required": "le nom d'utilisateur est obligatoire",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "L'email doit être valide",
    "any.required": "L'email est obligatoire",
  }),
  password: Joi.string().min(8).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')).required()
  .messages({
      'string.min': 'Le mot de passe doit contenir au moins 8 caractères.',
      'string.pattern.base': 'Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial (@$!%*?&).',
      'any.required': 'Le mot de passe est requis.',
  }),
});

module.exports = userSchema;