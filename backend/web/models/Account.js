module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define(
      "Accounts",
      {
        id: {
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
        verified: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        is_deleted: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "Accounts",
      }
    );
  
    return Accounts;
  };
  