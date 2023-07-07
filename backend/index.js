const express = require('express');
const {conditions} = require("./constants");
const cors = require('cors');

const app = express();

const port = 3000;
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => res.send('Hello World!'));

// Get list of condition keys with display names
app.get('/api/v1/conditions', async (req, res) => {
    const response = conditions.map(condition => {
        return {
            key: condition.key,
            displayName: condition.displayName,
        }
    })
    console.log('GET /api/v1/conditions', response);
    res.send(await new Promise((resolve) => {
        setTimeout(() => resolve(response), 1000)
    }));
});

// Get condition by key
app.get('/api/v1/conditions/:key', (req, res) => {
    const {key} = req.params;
    const condition = conditions.find(condition => condition.key === key);
    console.log(`GET /api/v1/conditions/${key}`, condition);
    setTimeout(() => res.send(condition), 1000)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));