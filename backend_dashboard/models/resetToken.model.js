module.exports = (sequelize, Sequelize) => {
  const ResetToken = sequelize.define("reset_tokens", {
    email: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  });

  return ResetToken;
};
