const express = require('express');

const userControllers=require('../controllers/userControllers')
const router=express.Router();

router.post("/login",userControllers.login);
router.post("/sign-up",userControllers.signup);
// router.get("/:id",postControllers.getbyid);
// router.put("/:id",postControllers.updatepost);
// router.delete("/:id",postControllers.deletepost);

module.exports=router;