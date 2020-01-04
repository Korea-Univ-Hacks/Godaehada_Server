const User = require('../../../model/user');

const { getTagValue } = require('../../../component/category-manager.service');

const exec = async (params) => {
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

  let cnt = 1;

  await findResult.forEach(item => {
    item.portfolios.forEach(async portfolio => {
      const tagValue = await getTagValue(portfolio.tag);
      portfolio.tag = tagValue[0];
      cnt++

      while(cnt === findResult.length) {
        return;
      }
    })
  })

  return findResult;
};

module.exports = {
  exec,
};
