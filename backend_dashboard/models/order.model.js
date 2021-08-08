module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    price: {
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    discount: {
      type: Sequelize.INTEGER,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Order;
};
