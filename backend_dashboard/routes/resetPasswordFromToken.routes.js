module.exports = (app) => {
    const resetToken = require("../controllers/resetPasswordFromToken.controller");
  
    var router = require("express").Router();

    // //   get single type
    router.get("/:token", resetToken.findOne);

    app.use("/api/resetTokenByToken", router);
  };
  