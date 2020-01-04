const _ = require('lodash');
const LRUCache = require('lru-cache');

const cache = new LRUCache({
  maxAge: 1000 * 60 * 60 * 10,
});

const CATEGORY_KEY = 'CATEGORY_KEY';

const categoryModel = require('../model/category');

const initCategory = async () => {
  const findResult = await categoryModel.find({})

  cache.set(CATEGORY_KEY, findResult)
}

const getCategoryKey = async (value) => {
  if (cache.has(CATEGORY_KEY) === false) {
    await initCategory();
  };

  return cache.get(CATEGORY_KEY).map(item => {
    if (item.name === value) {
      return item.type;
    }
  });
};

const getCategoryValue = async (key) => {
  if (cache.has(CATEGORY_KEY) === false) {
    await initCategory();
  };

  return cache.get(CATEGORY_KEY).map(item => {
    if (item.type === key) {
      return item.name;
    }
  });
};

const getTagKey = async (value) => {
  if (cache.has(CATEGORY_KEY) === false) {
    await initCategory();
  };

  return cache.get(CATEGORY_KEY).map(item => {
    let type;
    item.tags.forEach(tag => {
      if (tag.name === value) {
        type = tag.type;
        return;
      }
    })
    return type;
  });
};

const getTagValue = async (key) => {
  if (cache.has(CATEGORY_KEY) === false) {
    await initCategory();
  };

  return cache.get(CATEGORY_KEY).map(item => {
    let value;
    item.tags.forEach(tag => {
      if (tag.type === key) {
        value = tag.name;
        return;
      }
    })
    return value;
  });
};

module.exports = {
  getCategoryKey,
  getCategoryValue,
  getTagKey,
  getTagValue
};
