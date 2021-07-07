module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define(
      "Item",
      {
        itemid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        typeid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        details: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        objid: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      {
        freezeTableName: true,
        tableName: "Item",
      }
    );
  
    return Item;
  };
  