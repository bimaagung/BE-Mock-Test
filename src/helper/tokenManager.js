const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const acceessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_KEY || 'secret',
    {
      expiresIn: process.env.ACCESS_TOKEN_AGE || '1h',
    },
  );

  return acceessToken;
};

module.exports = { generateToken };
