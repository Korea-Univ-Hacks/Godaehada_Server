const mongoose = require('mongoose');
const Portfolio = require('../../../model/portfolio');
const User = require('../../../model/user');

const { getCategoryKey, getTagKey, initCategory } = require('../../../component/category-manager.service');

const exec = async (params, files, body) => {
    try {
        const cacheCategories = await initCategory();

        const { userId } = params;
        const { location } = files[0];
        const { category, tag } = body;

        const categoryKey = getCategoryKey(cacheCategories, category);
        const tagKey = getTagKey(cacheCategories, tag);

        const result = await Portfolio.create({
            category: categoryKey[0],
            tag: tagKey[0],
            portfolioThumbnail: location,
        });

        const { _id } = result;

        const newPortfolioId = mongoose.Types.ObjectId(_id);
        const { portfolios } = await User.findById(userId);

        const newPortfolios = [
            ...portfolios,
            newPortfolioId,
        ];

        await User.findOneAndUpdate({ _id: userId }, { portfolios: newPortfolios });

        return { success: true };
    } catch (e) {
        console.log(e)
    }
};

module.exports = {
    exec,
};
