module.exports = (sequelize, Sequelize) => {
  const DeliverDriver = sequelize.define("delivery_drivers", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    contact_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    availability: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return DeliverDriver;
};
