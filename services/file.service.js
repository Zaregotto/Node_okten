const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(process.cwd(), 'dataBase', 'users.json');

function reader () {
    try {
        const data = fs.readFile(dbPath);
        return data.toString()
            ? JSON.parse(data.toString()).sort((a,b) => a.id - b.id) : [];
    }catch (e) {
        console.error(e)
    }
}

function writer (users) {
    try {
        fs.writeFile(dbPath, JSON.stringify(users));
    }catch (e) {
        console.error(e)
    }
}

module.exports = {
    reader,
    writer,
}