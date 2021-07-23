const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;

db.category = require("./category.model")(sequelize, Sequelize);
db.type = require("./type.model")(sequelize, Sequelize);

db.category.hasMany(db.type, {
  foreignKey: "categoryId",
});
db.type.belongsTo(db.category, {
  foreignKey: "categoryId",
  as: "category",
});

module.exports = db;
