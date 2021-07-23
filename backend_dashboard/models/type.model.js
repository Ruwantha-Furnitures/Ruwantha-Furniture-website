module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("product_types", {
    name: {
      type: Sequelize.STRING,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Type;
};
