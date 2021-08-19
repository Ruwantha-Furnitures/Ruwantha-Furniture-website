module.exports = (sequelize, Sequelize) => {
  const OnlineCustomer = sequelize.define("online_customers", {
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return OnlineCustomer;
};
