module.exports = (sequelize, Sequelize) => {
  const ShippingDetail = sequelize.define("shipping_details", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    shipping_address: {
      type: Sequelize.STRING,
    },
    contact_number: {
      type: Sequelize.INTEGER,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return ShippingDetail;
};
