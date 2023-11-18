import express from "express";
import UsersController from "../controller/User.js";
import Auth from "../common/auth.js";

const router = express.Router();

router.get("/", Auth.validate,Auth.adminGuard,UsersController.getUsers);
router.get("/:id", UsersController.getUsersById);
router.post("/", UsersController.createUsers);
router.put("/:id", UsersController.editUser);
router.delete("/:id", UsersController.deleteUser);
router.post("/login", UsersController.login);

export default router;
