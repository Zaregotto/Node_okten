const users = require("../dataBase/users");
const fileService = require('../services/file.service')

function updateUser(req, res) {
    try {
        users.push({
            name: 'Anonim',
            age: Math.random() * 100
        });
        res.status(201).json('Users Update');
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Err');
    }
}

function getAllUsers(req, res) {
    try {
        const users = fileService.reader();
        res.json(users)

    } catch (e) {
        res.status(400).json(e.message || 'Unknown Err');

    }
}

function getById(req, res) {
    try {
        const {model = ''} = req.query;

        const modelToFind = model.split(';');
        console.log(modelToFind)
        const userIndex = +req.params.userId;

        if (isNaN(userIndex) || userIndex < 0) {
            res.status(400).json('Please enter valid ID');
            return;
        }

        const user = users[userIndex];

        if (!user) {
            res.status(404).json(`User ${userIndex} not found`);
            return;
        }

        res.json(user);
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Err');
    }
    }

function createUser (req, res) {
    try {
        const {name, age} = req.body;
        if (!Number.isInteger(age) || age < 20) {
            return res.status(400).json('Set valid age');
        }
        if (!name || name.length < 3) {
            return res.status(400).json('set valid age');
        }

        const users = fileService.reader();

        const newUser = {...req.body, id: users.length ? users[users.length - 1].id + 1 : 1 };

        fileService.writer([...users, newUser]);
        res.status(201).json('Users create');
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Err');
    }
}

function deleteUser(req, res) {
    try {
        const { userId } = req.params
        const users = fileService.reader();
        const index = users.findIndex((user) => user.id === +userId);

        if (index === -1) {
            return res.status(400).json(`User with id ${userId} not found`);
        }

        users.splice(index, 1);

        fileService.writer(users)
        res.status(201).json('User delete')
    } catch (e) {
        res.status(400).json(e.message || 'Unknown Err');
    }
}

module.exports = {
    createUser,
    getById,
    getAllUsers,
    deleteUser,
    updateUser,
}
