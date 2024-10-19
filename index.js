import express from 'express';
import bodyParser from 'body-parser';
import Mobil from './Mobil.js';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Ang Ang Ang');
});

app.use(bodyParser.json());
app.use('/', Mobil);

app.listen(PORT, () => 
    console.log(`Server berjalan di port: http://localhost:${PORT}`)
);
