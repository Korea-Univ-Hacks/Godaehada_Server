const User = require('../../../model/user');

const { getTagValue, initCategory } = require('../../../component/category-manager.service');

const _ = require('lodash');

const exec = async (params) => {
  const cacheCategories = await initCategory();

  const { userId } = params;

  const findResult = await User.find({ _id: userId })
    .select([
      'profileThumbnail',
      'nickname',
      'description'
    ])
    .populate({
      path: 'portfolios',
      select: 'tag portfolioThumbnail',
    });

  findResult.forEach(item => {
    item.portfolios.forEach(portfolio => {
      const tagValue = getTagValue(cacheCategories, portfolio.tag);
      portfolio.tag = tagValue[0];
    })
  })

  return findResult;
};

module.exports = {
  exec,
};
