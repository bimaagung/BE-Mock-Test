const jwt = require('jsonwebtoken');
const resData = require('../../helper/reponse');

function getToken(authHeader) {
  let splitHeader;

  try {
    splitHeader = authHeader.split(' ');
  } catch (err) {
    console.log(err);
    return null;
  }

  if (splitHeader.length > 1) {
    return splitHeader[1];
  }

  return splitHeader[0];
}

const authorized = (req, res, next) => {
  /*
  #swagger.security = [{
    "bearerAuth": []
  }]
  */
  const { authorization } = req.headers;

  if (authorization !== undefined && typeof authorization !== 'string') {
    return null;
  }

  let token = getToken(authorization);

  let payload;

  try {
    payload = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  } catch (err) {
    console.log(err);
    return res.status(401).json(resData.failed('unauthorized'));
  }

  req.user = {
    id: payload.id,
    name: payload.name,
  };

  next();
};

module.exports = { authorized };
