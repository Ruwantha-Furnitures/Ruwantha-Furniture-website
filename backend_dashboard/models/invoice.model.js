module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoices", {
    total_amount: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    no_of_products: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    products_price: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    total_discounts: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Invoice;
};
