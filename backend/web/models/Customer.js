module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
      "Customer",
      {
        custid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        aid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telephone: {
          type: DataTypes.BIGINT(10),
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "Customer",
      }
    );
  
    return Customer;
  };
  