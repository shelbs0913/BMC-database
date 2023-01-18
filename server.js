const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const {getProductData, productArray} = require('./ProductsStore');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors({
  origin: ['http://localhost:3000']
}));


// app.use(express.urlencoded({extended: true}));

// app.use(express.json());

function getTotalCost(cartProducts){
  let totalCost = 0;
  console.log("This is being hit!")
  cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += (productData.price * cartItem.quantity);
      console.log(totalCost);
  });
  return totalCost;
}
  
  app.post("/create-payment-intent", async (req, res) => {
    const { cartList } = req.body;
    console.log("Hi3");
    console.log(req.body);
    console.log(cartList);
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      payment_method_types: ["card"],
      amount: getTotalCost(cartList),
      currency: "usd",
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
app.use(require('./routers/newsletter'));
app.use(require('./routers/orders'));

app.listen(5000, function(req,res) {
    console.log("I'm listening on port 5000")
})