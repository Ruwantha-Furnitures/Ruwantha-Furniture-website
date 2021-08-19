module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      "Category",
      {
        catid : {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "category",
      }
    );
  
    return Category;
  };
  