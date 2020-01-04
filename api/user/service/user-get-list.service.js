const User = require('../../../model/user');

/**
 * 판매자 리스트 조회
 * 판매자로 등록된 회원은 썸네일이 존재하기 때문에
 * 썸네일이 존재하는 유저의 userId, tag, nickname을 조회 후 id로 정렬하여 반환
 * @returns {Promise<Query|Promise>}
 */
const exec = async () => {
  return User.find({})
    .exists('thumbnail', true)
    .select('thumbnail nickname')
    .populate({
      path: 'portfolios',
      select: 'tag category',
    })
};

module.exports = {
  exec,
};
