module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
      "Message",
      {
        messageid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telephone: {
          type: DataTypes.BIGINT(10),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        details: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "message",
      }
    );
  
    return Message;
  };
  