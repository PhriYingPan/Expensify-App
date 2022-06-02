const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.sendFile(path.join9publicPath, 'index.html');
});

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('server is up!');
});