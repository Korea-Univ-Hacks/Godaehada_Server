const mongoose = require('mongoose');
const Portfolio = require('../../../model/portfolio');
const User = require('../../../model/user');

mongoose.set('useFindAndModify', false);
const exec = async (params, files, body) => {
    try {
        const { user } = params;
        const { location } = files[0];
        const { category, tag } = body;

        const result = await Portfolio.create({
            category,
            tag,
            url: location,
        });
        const { _id } = result;
        const newPortfolioId = mongoose.Types.ObjectId(_id);
        const { portfolios } = await User.findById(user);
        const newPortfolios = [
            ...portfolios,
            newPortfolioId,
        ];

        const result2 = await User.findOneAndUpdate({ _id: user }, { portfolios: newPortfolios });
        console.log(result2);

        return 0;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    exec,
};
