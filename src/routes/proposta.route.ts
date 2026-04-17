
import { Router } from "express"
import { PropostaController } from "../controllers/proposta.controller.js"
import AuthMiddleware from "../security/auth.middleware.js"
import authorize from "../security/authorize.middleware.js"
import { Role } from "../utils/types.js"

const PropostaRoute = {
    create: "/create",
    getAll: "/",
    getById: "/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    accept: "/accept/:id"
}

const router = Router()

router.get(PropostaRoute.getById, authorize([Role.ADMIN ,Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PropostaController.get)

router.use(AuthMiddleware, authorize())

router.get(PropostaRoute.getAll,authorize([Role.ADMIN]), PropostaController.getAll)

router.post(PropostaRoute.create,authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), PropostaController.create)

router.put(PropostaRoute.update,authorize([Role.ADMIN]), PropostaController.update)

router.delete(PropostaRoute.delete,authorize([Role.ADMIN]), PropostaController.delete)

router.put(PropostaRoute.accept, PropostaController.accept)

export { router }
