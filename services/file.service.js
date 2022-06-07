const fs = require('fs');

fs.writeFile('./boys/Sasha.js', '{"gender": "male", "age": 21, "name": "Sasha"}', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.rename('./boys/Sasha.js', './boys/Sasha.json', err => {
        err && console.log(err);
    })
})

fs.writeFile('./boys/Natali.js', '{"gender": "famale", "age": 23, "name": "Natali"}', (err) => {
    if (err) {
        console.log(err, "errors")
        return;
    }

    fs.rename('./boys/Natali.js', './girls/Natali.json', err => {
        err && console.log(err);
    })
})

fs.writeFile('./boys/Yulia.js', '{"gender": "famale", "age": 20, "name": "Yulia"}', (err) => {
    if (err) {
        console.log(err, "errors")
        return;
    }

    fs.rename('./boys/Yulia.js', './girls/Yulia.json', err => {
        err && console.log(err);
    })
})

fs.writeFile('./girls/Yura.js', '{"gender": "male", "age": 22, "name": "Yura"}', (err) => {
    if (err) {
        console.log(err, "errors")
        return;
    }

    fs.rename('./girls/Yura.js', './boys/Yura.json', err => {
        err && console.log(err);
    })
})

fs.writeFile('./girls/Anna.js', '{"gender": "famale", "age": 25, "name": "Anna"}', (err) => {
    if (err) {
        console.log(err, "errors")
        return;
    }

    fs.rename('./girls/Anna.js', './girls/Anna.json', err => {
        err && console.log(err);
    })
})

fs.writeFile('./girls/Kolya.js', '{"gender": "male", "age": 22, "name": "Kolya"}', (err) => {
    if (err) {
        console.log(err, "errors")
        return;
    }

    fs.rename('./girls/Kolya.js', './boys/Kolya.json', err => {
        err && console.log(err);
    })

    fs.readdir('./girls', (err, filesGirl) => {
        if (err) {
            console.log(err)
            return;
        }
        for (const file of filesGirl){
            console.log(file);

            fs.readFile(`./girls/${file}`, (err1, data) => {
                if (err1) {
                    console.log(err1)
                    return;
                }

                console.log("Girls", data.toString())
            })
        }

        fs.readdir('./boys', (err, files) => {
            if (err) {
                console.log(err)
                return;
            }
            for (const file of files){
                console.log(file);

                fs.readFile(`./boys/${file}`, (err1, data) => {
                    if (err1) {
                        console.log(err1)
                        return;
                    }

                    console.log("Boys", data.toString())
                })
            }
        })
    })
})

