const mongoose = require('mongoose');
const Portfolio = require('../../../model/portfolio');
const User = require('../../../model/user');

const exec = async (params, files, body) => {
    try {
        const { user } = params;
        const { location } = files[0];
        const { category, tag } = body;
        const result = await Portfolio.create({
            category,
            tag,
            portfolioThumbnail: location,
        });
        const { _id } = result;
        const newPortfolioId = mongoose.Types.ObjectId(_id);
        const { portfolios } = await User.findById(user);
        const newPortfolios = [
            ...portfolios,
            newPortfolioId,
        ];
        await User.findOneAndUpdate({ _id: user }, { portfolios: newPortfolios });
        return { success: true };
    } catch (e) {
        throw Error(e);
    }
};

module.exports = {
    exec,
};
