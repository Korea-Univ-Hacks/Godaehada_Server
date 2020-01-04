const User = require('../../../model/user');

const exec = async (query) => {
  const { userId } = query;

  const findResult = await User.find({ _id: userId })
    .exists({
      thumbnail: true,
    })
    .select([
      'thumbnail',
      'tag',
      'nickname',
      'portfolios',
    ]);


  return 0;
};

module.exports = {
  exec,
};
