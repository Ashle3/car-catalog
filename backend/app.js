const express = require('express');

const app = express();

app.get('https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars',(req, res, next) => {
    let token = res.header('Access-Control-Expose-Headers', 'your-token');
    console.log(token);
});


module.exports = app;