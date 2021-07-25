module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
      "Cart",
      {
        cartid : {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        custid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        itemid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
      },
      {
        freezeTableName: true,
        tableName: "Cart",
      }
    );
  
    return Cart;
  };
  