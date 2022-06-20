import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Correlation Calculator with node and typescript - working');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})