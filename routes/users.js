const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {

  const { username, email, password } = req.body
  const user = new User({
    username: username,
    email: email,
    password: password

  });

  console.log(user);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
