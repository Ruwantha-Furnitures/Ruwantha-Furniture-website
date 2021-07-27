module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
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
    },
    payment_method: {
      type: Sequelize.STRING,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Customer;
};
