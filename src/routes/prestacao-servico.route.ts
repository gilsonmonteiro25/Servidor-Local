import { Router } from "express"
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js"

const PrestacaoServicoRouter = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id"
}

const router = Router()

router.post(PrestacaoServicoRouter.create, PrestacaoServicoController.create)
router.get(PrestacaoServicoRouter.getAll, PrestacaoServicoController.getAll)
router.get(PrestacaoServicoRouter.getById, PrestacaoServicoController.get)
router.put(PrestacaoServicoRouter.update, PrestacaoServicoController.update)
router.delete(PrestacaoServicoRouter.delete, PrestacaoServicoController.delete)

export { router }
