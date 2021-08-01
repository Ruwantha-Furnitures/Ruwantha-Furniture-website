module.exports = (sequelize, DataTypes) => {
    const DeliveryCharge = sequelize.define(
      "DeliveryCharge",
      {
        chargeid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        area: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },       
      },
      {
        freezeTableName: true,
        tableName: "DeliveryCharge",
      }
    );
  
    return DeliveryCharge;
  };
  