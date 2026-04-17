import{ Router } from "express"
import AuthMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
import { empresaModel } from "../models/empresa.model.js"
import { EmpresaController } from "../controllers/empresa.controller.js"


const empresaRoute = {
    create:"/create",
    get:"/get-by-id/:id",
    getAll:"/",
    update:"/update/:id",
    delete:"/delete/:id",
}

const router = Router()

router.use(AuthMiddleware)

router.get(empresaRoute.getAll,authorize([Role.ADMIN]),EmpresaController.getAll)

router.get(empresaRoute.get,authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]),EmpresaController.get)

router.post(empresaRoute.create,authorize([Role.ADMIN, Role.CLIENTE,]),EmpresaController.create)

router.put(empresaRoute.update,authorize([Role.ADMIN]),isOwner(empresaModel, "owner"),EmpresaController.update)

router.delete(empresaRoute.delete,authorize([Role.ADMIN,]),isOwner(empresaModel, "owner"),EmpresaController.delete)


export { router }