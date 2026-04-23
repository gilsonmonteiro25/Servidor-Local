import { Router } from "express"
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js";
import { PrestadorController } from "../controllers/prestador.controller.js";
import AuthMiddleware from "../security/auth.middleware.js";
import {authorize} from "../security/auth.middleware.js";
import { Role } from "../utils/types.js"

const PrestacaoServicoRoute = {
    create: "/create",
    getAll: "/",
    getAllByCategoria: "/categoria/:categoria",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    getAllPrestacaoServicoDetalhada: "/get-all-detalhado"
}

const router = Router()

router.get(PrestacaoServicoRoute.getAll, PrestacaoServicoController.getAll)

router.get(PrestacaoServicoRoute.getById, PrestacaoServicoController.get)

router.use(AuthMiddleware)

router.post(PrestacaoServicoRoute.create, authorize([Role.ADMIN, Role.EMPRESA]), PrestacaoServicoController.create)

router.get(PrestacaoServicoRoute.getAllByCategoria, PrestacaoServicoController.getAllPrestacoesServicoByCategoria)

router.put(PrestacaoServicoRoute.update, authorize([Role.ADMIN]), PrestacaoServicoController.update)

router.delete(PrestacaoServicoRoute.delete, authorize([Role.ADMIN]) ,PrestacaoServicoController.delete)

router.get(PrestacaoServicoRoute.getAllPrestacaoServicoDetalhada, PrestacaoServicoController.getAllPrestacaoServicoDetalhada)

export { router }
