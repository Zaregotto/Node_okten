const userRouter = require('express').Router();

const userController = require("../controllers/user.controller");

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.updateUser);
userRouter.delete('/:usersId', userController.deleteUser);
userRouter.get('/:userId', userController.getById);
userRouter.put('/:usersId', userController.createUser);

module.exports = userRouter;