module.exports = (sequelize, Sequelize) => {
  const AssignOrderDetails = sequelize.define("assign_order_details", {
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

  return AssignOrderDetails;
};
