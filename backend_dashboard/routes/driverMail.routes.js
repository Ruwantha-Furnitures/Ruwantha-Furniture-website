module.exports = (app) => {
    const mail = require("../controllers/sendMail.controller");
  
    var router = require("express").Router();
  
    //   Create a new Mail
    router.post("/", mail.create);
  
    // //   Retrieve all Tutorials
    // router.get("/", account.findAll);
  
    //   Retrieve a single Tutorial with id
    router.put("/:id", mail.sendAssignMail);
  
    // //   update the tutorial
    // router.put("/:id", account.update);
  
    // //   delete tutorial
    // router.delete("/:id", account.delete);
  
    app.use("/api/driverMail", router);
  };
  