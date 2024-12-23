
// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let products = [
    { id: 1, name: 'Product 1', isFavorite: false },
    { id: 2, name: 'Product 2', isFavorite: false },
    { id: 3, name: 'Product 3', isFavorite: false },
];

let cities = [
    { id: 1, name: 'Paris', imageUrl: 'https://example.com/paris.jpg', isFavorite: false },
    { id: 2, name: 'London', imageUrl: 'https://example.com/london.jpg', isFavorite: false },
    { id: 3, name: 'New York', imageUrl: 'https://example.com/new-york.jpg', isFavorite: false },
];

app.get('/products', (req, res) => {
    res.json(products);
});


app.get('/products/:id', (req, res) => {
    res.send(products[(+req.params.id) + 1]);
})

app.get('/cities', (req, res) => {
    res.json(cities);
});

app.post('/products/favorites', (req, res) => {
    const { id, isFavorite } = req.body;
    if (typeof id !== 'number' || typeof isFavorite !== 'boolean') {
        return res.status(400).send('Invalid request body');
    }
    const product = products.find(p => p.id === id);
    if (product) {
        product.isFavorite = isFavorite;
        return res.send('Product updated');
    }
    res.status(404).send('Product not found');
});

app.post('/cities/favorites', (req, res) => {
    const { id, isFavorite } = req.body;
    if (typeof id !== 'number' || typeof isFavorite !== 'boolean') {
        return res.status(400).send('Invalid request body');
    }
    const city = cities.find(c => c.id === id);
    if (city) {
        city.isFavorite = isFavorite;
        return res.send('City updated');
    }
    res.status(404).send('City not found');
});

app.listen(5000, () => console.log('Server running on port 5000'));
