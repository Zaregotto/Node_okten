const express = require('express');
const userRouter = require('./routes/user.router');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).json('Bad request')
})

app.listen(5000, () => {
    console.log('listen 5000')
})