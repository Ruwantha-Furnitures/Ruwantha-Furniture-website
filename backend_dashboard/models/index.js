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
db.product = require("./product.model")(sequelize, Sequelize);
db.customer = require("./customer.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);

// Foreign key for types
db.category.hasMany(db.type, {
  foreignKey: "categoryId",
});

db.type.belongsTo(db.category, {
  foreignKey: "categoryId",
  as: "category",
});

// Foreign key for product
db.type.hasOne(db.product, {
  foreignKey: "type_id",
});

db.product.belongsTo(db.type, {
  foreignKey: "type_id",
  as: "type",
});

// Foreign key for order
db.product.hasMany(db.order, {
  foreignKey: "product_id",
});

db.order.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

db.customer.hasMany(db.order, {
  foreignKey: "customer_id",
});

db.product.belongsTo(db.type, {
  foreignKey: "customer_id",
  as: "customer",
});

module.exports = db;
