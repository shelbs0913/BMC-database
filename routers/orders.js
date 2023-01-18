const express = require('express');
const router = express.Router();
const app = express();

const {Orders} = require('../helpers/dbConnections');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/orders', async (req, res) => {

  try {
      const { items, name, streetAddress, city, state, zipCode, phoneNumber, itemTotal, taxTotal, finalTotal} = req.body;

      const newOrder = await Orders.create({
        items: items,
        name: name,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipCode: zipCode,
        phoneNumber: phoneNumber,
        itemTotal: itemTotal,
        taxTotal: taxTotal,
        finalTotal: finalTotal 
      });

      res.status(200).send("We have successfully found your order!");
  }
  catch (error) {
    return res.status(400).send("There was an error! Order Not Found!");
  }
})

module.exports = router