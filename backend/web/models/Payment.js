module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
      "Payment",
      {
        payid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        orderid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },       
      },
      {
        freezeTableName: true,
        tableName: "payment",
      }
    );
  
    return Payment;
  };
  