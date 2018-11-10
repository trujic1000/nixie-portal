const User = require('../user/userModel');

// CREATE A USER, NON-ADMIN USERS CANNOT CREATE A USER
async function signup(req, res) {
  const { email, username, password, role } = req.body;
  const newUser = new User({email, username, password, role});

  try {
    const user = await newUser.save();
    res.status(201).send(`${user.username} created`);
  } catch (error) {
    res.status(400).send();
  }
}

module.exports = {
  signup
}