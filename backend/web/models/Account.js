module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define(
      "Account",
      {
        aid: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userlevel: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "Account",
      }
    );
  
    return Account;
  };
  