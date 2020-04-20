const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => console.log(`*** server listening on port ${PORT} ***`));