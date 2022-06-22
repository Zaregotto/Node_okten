const { Types } = require('mongoose');
const DefaultError = require('../errors/defaultErr');

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const { id } = req.params;

            if (!Types.ObjectId.isValid(id)) {
                return next(new DefaultError('Not valid ID'));
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};