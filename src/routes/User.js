const express = require('express')
const UsersController = require('../controller/User') 

const router = express.Router();

router.get("/",UsersController.getUsers)
router.get("/:id",UsersController.getUsersById)
router.post("/",UsersController.createUsers)
router.put("/:id",UsersController.editUser)
router.delete("/:id",UsersController.deleteUser)



module.exports = router