const express = require('express');
const router = express.Router();
const app = express();

const {Newsletter} = require('../helpers/dbConnections');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/newsletter', async (req, res) => {

  try {
      const { firstName, lastName, email} = req.body;

      const newContact = await Newsletter.create({
        firstName: firstName,
        lastName: lastName,
        email: email
      });

      res.status(200).send("You have successfully signed up for the Newsletter");
  }
  catch (error) {
    return res.status(404).send("There was an error! Try again later");
  }
})

module.exports = router