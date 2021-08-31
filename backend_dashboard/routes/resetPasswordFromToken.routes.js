module.exports = (app) => {
    const resetToken = require("../controllers/resetPasswordFromToken.controller");
  
    var router = require("express").Router();

    // //   get single type
    router.get("/:token", resetToken.findOne);

    
    // //   delete type
    router.delete("/:token", resetToken.delete);

    app.use("/api/resetTokenByToken", router);
  };
  