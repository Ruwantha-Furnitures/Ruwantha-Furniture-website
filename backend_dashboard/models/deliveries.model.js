module.exports = (sequelize, Sequelize) => {
  const Deliveries = sequelize.define("deliveries", {
    request_status: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    complete_status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Deliveries;
};
