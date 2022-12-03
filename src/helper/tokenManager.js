const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const acceessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_KEY || 'secret',
    {
      expiresIn: process.env.ACCESS_TOKEN_AGE,
    },
  );

  return acceessToken;
};

module.exports = { generateToken };
