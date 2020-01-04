const _ = require('lodash');

const User = require('../../../model/user');

const { getCategoryKey, getCategoryValue, getTagKey, getTagValue, initCategory } = require('../../../component/category-manager.service');

/**
 * 판매자 리스트 조회
 * 판매자로 등록된 회원은 썸네일이 존재하기 때문에
 * 썸네일이 존재하는 유저의 userId, tag, nickname을 조회 후 id로 정렬하여 반환
 * @returns {Promise<Query|Promise>}
 */
const exec = async (query) => {
  const cacheCategories = await initCategory();

  let { category, tag } = query;

  const matchCondition = {
    portfolioThumbnail: {
      $exists: true
    }
  };

  if (_.isNil(tag) === false) {
    const tagKey = getTagKey(cacheCategories, tag);
    matchCondition.tag = tagKey;
  }

  if (_.isEmpty(category) === false) {
    const categoryKey = getCategoryKey(cacheCategories, category);
    matchCondition.category = categoryKey;
  }

  const findResult = await User.find({})
    .exists('thumbnail', true)
    .select('thumbnail nickname')
    .populate({
      path: 'portfolios',
      select: 'tag category portfolioThumbnail',
      match: matchCondition
    });

  findResult.forEach(item => {
    item.portfolios.forEach(portfolio => {
      const categoryValue = getCategoryValue(cacheCategories, portfolio.category);
      const tagValue = getTagValue(cacheCategories, portfolio.tag);
      portfolio.category = categoryValue[0];
      portfolio.tag = tagValue[0];
    })
  })

  return findResult;
};

module.exports = {
  exec,
};
