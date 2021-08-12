module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    contact_number: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    details: {
      type: Sequelize.STRING,
    },
  });

  return Message;
};
