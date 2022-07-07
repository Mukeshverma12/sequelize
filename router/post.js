const express = require('express');

const postControllers=require('../controllers/postControllers')
const router=express.Router();

router.get("/",postControllers.getallpost);
router.post("/createpost",postControllers.createpost);
router.get("/:id",postControllers.getbyid);
router.put("/:id",postControllers.updatepost);
router.delete("/:id",postControllers.deletepost);

module.exports=router;