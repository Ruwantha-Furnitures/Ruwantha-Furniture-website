module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    width: {
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.STRING,
    },
    discount: {
      type: Sequelize.INTEGER,
    },
    img_location: {
      type: Sequelize.STRING,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Order;
};
