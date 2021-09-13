module.exports = (app) => {
    const mail = require("../controllers/sendMail.controller");
  
    var router = require("express").Router();
  
    //   Create a new Mail
    router.post("/", mail.create);
  
    //   Retrieve a single Tutorial with id
    router.put("/:id", mail.sendAssignMail);
  
    app.use("/api/driverMail", router);
  };
  