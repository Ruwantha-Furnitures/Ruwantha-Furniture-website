module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    total_product_amount: {
      type: Sequelize.NUMBER,
      defaultValue: 0,
    },
    payment_method: {
      type: Sequelize.STRING,
      defaultValue: "ONLINE",
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Order;
};
