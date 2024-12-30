const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const userSchema = require("../validation/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/sign-in", async (req, res) => {

  const { username, email, password } = req.body;
  const { error } = userSchema.validate(
    { username, email, password },
    { abortEarly: false }
  );
  if (error) {
    return res.status(400).json({
      message: "Validation échouée.",
      errors: error.details.map((err) => err.message),
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const newUser = user
      .save()
      .then(() => console.log("User saved successfully"))
      .catch((err) => console.error("Validation failed:", err.message));
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
