const express = require('express');
const cors = require('cors');

const { serverConfig } = require('./config');

const apiRouter = require('./routers');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Application running on ${serverConfig.PORT}`);
});