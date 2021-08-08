module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoices", {
    total_amount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Invoice;
};
