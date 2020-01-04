const responseWrapper = (method, result, res) => {
  let statusCode;

  switch (method) {
    case 'GET': {
      statusCode = 200;
      break;
    }
    case 'POST': {
      statusCode = 201;
      break;
    }
    case 'PUT': {
      statusCode = 201;
      break;
    }
    case 'DELETE': {
      statusCode = 204;
      break;
    }
  }
  res.status(statusCode).json(result);
};

module.exports = {
  responseWrapper,
};
