module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("orders", {
    total_amount: {
      type: Sequelize.NUMBER,
      defaultValue: 0,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Invoice;
};
