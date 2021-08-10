module.exports = (sequelize, Sequelize) => {
  const ProductReview = sequelize.define("product_reviews", {
    feedback: {
      type: Sequelize.STRING,
    },
    rating_points: {
      type: Sequelize.INTEGER,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return ProductReview;
};
