module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
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
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Customer;
};
