import { Router } from "express"
import{} from "../controllers/prestador.controller.js";
import { OrcamentoController } from "../controllers/orcamento.controller.js";
import AuthMiddleware from "../security/auth.middleware.js";
import {authorize} from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const OrcamentoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id"
}

const router = Router()

router.get(OrcamentoRoute.getById, OrcamentoController.get)

router.use(AuthMiddleware)

router.get(OrcamentoRoute.getAll, authorize([Role.ADMIN]), OrcamentoController.getAll)

router.post(OrcamentoRoute.create, OrcamentoController.create)

router.put(OrcamentoRoute.update, OrcamentoController.update)

router.delete(OrcamentoRoute.delete, OrcamentoController.delete)

export { router }
