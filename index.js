const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDBmongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/api")
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(err);
    console.log("failed to connect");
})

// Define product schema
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

// Create product model
const Product = mongoose.model('Product', productSchema);

// Define routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.put('/api/products/:id', async (req, res) => {
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, { quantity: req.body.quantity }, { new: true });

  res.json(product);
});

app.delete('/api/products/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ message: 'Product deleted' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
