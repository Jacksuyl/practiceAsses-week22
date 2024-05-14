require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const { WarehouseItem } = require('./db/models');

app.use(express.json());

app.get('/items', async (req, res) => {
  try {
    const items = await WarehouseItem.findAll({
      where: { isUsed: false }
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /items/:id - Update an item
app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity, isUsed } = req.body;
    const item = await WarehouseItem.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: "Warehouse Item not found" });
    }

    item.name = name;
    item.price = price;
    item.quantity = quantity;
    item.isUsed = isUsed;
    await item.save();

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}