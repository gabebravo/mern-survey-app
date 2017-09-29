const express = require('express');
const router  =  new express.Router();

const db   = require('../lib/db');
const User = db.mongoose.model('User');

const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

createUser = (req, res) => {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if(user){
      res.json({ success: false, message: 'Email is already registered.' });
    } else {
      const user = new User(req.body);
      user.save()
        .then((user) => {
          res.status(200).json({ success: true, message: 'Your login credentials were added.' });
        }).catch(err => {
            res.status(500).send(err);
        });
    }
  });
}

function userLogin(req, res) {
  // find the user
    User.findOne({
      email: req.body.email
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. Email not found.' });
      } else if (user) {

        // check if password matches
        if (!user.comparePassword(req.body.password)) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          const token = jwt.sign(user, SECRET, { expiresIn: 3600 }); // 1 hour

          // return the information including token as JSON
          res.status(200).json({
            name: user.name,
            admin: user.admin,
            email: user.email,
            success: true,
            message: 'Sucessfully logged in!',
            token: token
          });
        }
      }
    });
}

function resetPassword(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    if (!user) {
      res.sendStatus(404);
    }

    res.json(user);
  });
}

router.post('/authenticate', userLogin);
router.post('/',   createUser);

module.exports = router;
