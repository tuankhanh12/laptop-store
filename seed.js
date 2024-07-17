const mongoose = require('mongoose');
const Laptop = require('./models/Laptop');


mongoose.connect('mongodb://localhost:27017/laptop-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const laptops = [
  {
    name: 'Acer aspire 5',
    price: 999.99,
    brand: 'Acer',
    picture: 'C:\Users\THI TRAN TUAN KHANH\OneDrive\Desktop\Folders\codes\web79\presentation\laptop-store\frontend\public\laptop-acer-aspire-7-a715-76g-59mw-6_8fb5ee7de28e4e76b0daae4e92c594de_master.jpg',
  },
  {
    name: 'Laptop Gaming Lenovo Legion 5 Y7000P 4050',
    price: 1299.99,
    brand: 'Lenovo',
    picture: 'C:\Users\THI TRAN TUAN KHANH\OneDrive\Desktop\Folders\codes\web79\presentation\laptop-store\frontend\public\laptop-gaming-lenovo-legion-5-y7000p-6_e33cb71c45684a64bedb27acdfd5dd9a_master.webp',
  },

];


Laptop.insertMany(laptops)
  .then(() => {
    console.log('Laptops added successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error adding laptops:', error);
    mongoose.connection.close();
  });
