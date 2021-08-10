module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("accounts", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    user_level: {
      type: Sequelize.INTEGER,
    },
    verified: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Account;
};
