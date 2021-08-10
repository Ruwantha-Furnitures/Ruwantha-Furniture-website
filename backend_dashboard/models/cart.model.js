module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("carts", {
    quantity: {
      type: Sequelize.INTEGER,
    },

    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Cart;
};
