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
db.sellProduct = require("./sellProduct.model")(sequelize, Sequelize);
db.deliveryDriver = require("./deliveryDriver.model")(sequelize, Sequelize);
db.deliveries = require("./deliveries.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);
db.account = require("./account.model")(sequelize, Sequelize);
db.cart = require("./cart.model")(sequelize, Sequelize);
db.deliveryCharges = require("./deliveryCharges.model")(sequelize, Sequelize);
db.onlineCustomer = require("./onlineCustomer.model")(sequelize, Sequelize);
db.messages = require("./messages.model")(sequelize, Sequelize);
db.payments = require("./payments.model")(sequelize, Sequelize);
db.shippingDetails = require("./shippingDetails.model")(sequelize, Sequelize);
db.productReview = require("./productReview.model")(sequelize, Sequelize);
db.resetToken = require("./resetToken.model")(sequelize, Sequelize);

// Foreign key for types
db.category.hasMany(db.type, {
  foreignKey: "category_id",
});

db.type.belongsTo(db.category, {
  foreignKey: "category_id",
  as: "category",
});

// Foreign key for product
db.type.hasMany(db.product, {
  foreignKey: "type_id",
});

db.product.belongsTo(db.type, {
  foreignKey: "type_id",
  as: "type",
});

// Foreign key for order
db.product.hasMany(db.sellProduct, {
  foreignKey: "product_id",
});

db.sellProduct.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

db.order.hasMany(db.sellProduct, {
  foreignKey: "order_id",
});

db.sellProduct.belongsTo(db.order, {
  foreignKey: "order_id",
  as: "order",
});

// Foreign key for invoice
db.customer.hasMany(db.order, {
  foreignKey: "customer_id",
});

db.order.belongsTo(db.customer, {
  foreignKey: "customer_id",
  as: "customer",
});

// Foreign key for deliveries
db.order.hasMany(db.deliveries, {
  foreignKey: "order_id",
});

db.deliveries.belongsTo(db.order, {
  foreignKey: "order_id",
  as: "order",
});

db.deliveryDriver.hasMany(db.deliveries, {
  foreignKey: "delivery_driver_id",
});

db.deliveries.belongsTo(db.deliveryDriver, {
  foreignKey: "delivery_driver_id",
  as: "deliveryDriver",
});

// Foreign key for Cart
db.customer.hasOne(db.cart, {
  foreignKey: "customer_id",
});

db.cart.belongsTo(db.customer, {
  foreignKey: "customer_id",
  as: "customer",
});

db.product.hasMany(db.cart, {
  foreignKey: "product_id",
});

db.cart.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

// Foreign key for delivery Driver
db.account.hasOne(db.deliveryDriver, {
  foreignKey: "account_id",
});

db.deliveryDriver.belongsTo(db.account, {
  foreignKey: "account_id",
  as: "account",
});

// Foreign key for Online Customer
db.customer.hasOne(db.onlineCustomer, {
  foreignKey: "customer_id",
});

db.onlineCustomer.belongsTo(db.customer, {
  foreignKey: "customer_id",
  as: "customer",
});

db.account.hasOne(db.onlineCustomer, {
  foreignKey: "account_id",
});

db.onlineCustomer.belongsTo(db.account, {
  foreignKey: "account_id",
  as: "account",
});

// Foreign key for payments
db.order.hasOne(db.payments, {
  foreignKey: "order_id",
});

db.payments.belongsTo(db.order, {
  foreignKey: "order_id",
  as: "order",
});

// Foreign key for shipping Details
db.deliveryCharges.hasOne(db.shippingDetails, {
  foreignKey: "charge_id",
});

db.shippingDetails.belongsTo(db.deliveryCharges, {
  foreignKey: "charge_id",
  as: "deliveryCharge",
});

db.order.hasOne(db.shippingDetails, {
  foreignKey: "order_id",
});

db.shippingDetails.belongsTo(db.order, {
  foreignKey: "order_id",
  as: "order",
});

// Foreign key for product Review
db.product.hasMany(db.productReview, {
  foreignKey: "product_id",
});

db.productReview.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

module.exports = db;
