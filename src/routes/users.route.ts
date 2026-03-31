import { Router } from "express";
import { UserController } from "../controllers/users.controller.js";
import AuthMiddlewere from "../security/auth.middlewere.js";

const router = Router()

router.post("/create", UserController.create)

router.get("/", AuthMiddlewere,UserController.getAll)

router.get("/:id", UserController.getById)

router.put("/:id", UserController.update)

router.delete("/:id", UserController.delete)

router.post("/login", UserController.login)

export { router };