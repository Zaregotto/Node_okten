const defaultError = require('../errors/defaultErr');
const userService = require('../services/user.service');
const userValidator = require('../validators/user.validator');
const userQueryValidator = require('../validators/query.validator')

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.findOneUser({ _id: id });
            if (!user) {
                return next(new defaultError('User not found'));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserUniq: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await userService.findOneUser({ email });
            if (user) {
                return next(new defaultError(`User with email ${email} is exist`, 409));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValidForCreate: async (req, res, next) => {
        try {
            const { error, value } = userValidator.newUserValidator.validate(req.body);

            if (error) {
                return next(new defaultError(error.details[0].message));
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValidForUpdate: async (req, res, next) => {
        try {
            const { error, value } = userValidator.updateUserValidator.validate(req.body);

            if (error) {
                return next(new defaultError(error.details[0].message));
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserQueryValid: async (req, res, next) => {
        try {
            const { error, value } = userQueryValidator.findAll.validate(req.query);

            if (error) {
                return next(new defaultError(error.details[0].message));
            }

            req.query = value;
            next();
        } catch (e) {
            next(e);
        }
    },
};