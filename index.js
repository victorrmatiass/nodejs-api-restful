const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ messsage: 'API is ok' }));

app.listen(3333, () => console.log('Server is running...'));
