module.exports = (sequelize, Sequelize) => {
  const DeliverDriver = sequelize.define("delivery_drivers", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    contact_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    payment: {
      type: Sequelize.INTEGER,
    },
    area: {
      type: Sequelize.STRING,
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
