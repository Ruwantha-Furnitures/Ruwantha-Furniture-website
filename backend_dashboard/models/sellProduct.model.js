module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("sell_products", {
    price: {
      type: Sequelize.NUMBER,
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
