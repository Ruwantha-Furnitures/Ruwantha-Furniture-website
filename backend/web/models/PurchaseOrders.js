module.exports = (sequelize, DataTypes) => {
    const PurchaseOrders = sequelize.define(
      "PurchaseOrders",
      {
        orderid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },        
        itemid: {
            type: DataTypes.INTEGER,
            allowNull: false,                        
        },
        custid: {
            type: DataTypes.INTEGER,
            allowNull: false,                        
        },
        fname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
          type: DataTypes.BIGINT(10),
          allowNull: false,
        },
        chargeid: {
            type: DataTypes.INTEGER,
            allowNull: false,                        
        },
      },
      {
        freezeTableName: true,
        tableName: "purchaseorders",
      }
    );
  
    return PurchaseOrders;
  };
  