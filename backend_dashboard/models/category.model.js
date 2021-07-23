module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("product_categories", {
    name: {
      type: Sequelize.STRING,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Category;
};
