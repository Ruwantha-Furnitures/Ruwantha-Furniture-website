module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
      "Products",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type_id : {
          type: DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        width: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        height: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },        
        objectid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "Products",
      }
    );
  
    return Products;
  };
  