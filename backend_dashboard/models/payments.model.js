module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    total_amounts: {
      type: Sequelize.NUMBER,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Payment;
};
