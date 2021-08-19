module.exports = (sequelize, DataTypes) => {
    const ResetToken = sequelize.define(
      "ResetToken",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },        
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
      },
      {
        freezeTableName: true,
        tableName: "purchaseorders",
      }
    );
  
    return ResetToken;
  };
  