import { categoriaModel } from "../models/categoria.model.js"
import { empresaModel } from "../models/empresa.model.js"
import type { empresaDBType, ResponseType } from "../utils/types.js"
import type { Request, Response } from "express"

export const EmpresaController = {
    async create(req: Request, res: Response) {
        const empresa: empresaDBType = req.body

        if (!empresa) {
            return res.status(400).json({
                status: "error",
                message: "Dados de Empresa invalidos",
                data: null
            })
        }

        console.log(empresa)

        const createEmpresaResponse: empresaDBType | null = await empresaModel.create(empresa)
        const response:  ResponseType<empresaDBType> = {
                status: "success",
                message: "Empresa criado com sucesso",
                data: createEmpresaResponse
        }

        return res.json(createEmpresaResponse)
    },

async getAll(req: Request, res: Response) {
        const getAllEmpresaResponse = await empresaModel.getAll()

        if (!getAllEmpresaResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar utilizadores",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Utilizadores buscados com sucesso",
            data: getAllEmpresaResponse
        })
    },

    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }
    },

 async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedEmpresa: empresaDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedEmpresa) {
            return res.status(400).json({
                status: "error",
                message: "Dados de utilizador invalidos",
                data: null
            })
        }
    },
  async delete(req: Request, res: Response) {
         const { id } = req.params
 
         if (!id) {
             return res.status(400).json({
                 status: "error",
                 message: "ID obrigatorio",
                 data: null
             })
         }
 
         const deleteEmpresaResponse = await empresaModel.delete(id as string)
 
         if (!deleteEmpresaResponse) {
             return res.status(400).json({
                 status: "error",
                 message: "Erro ao apagar utilizador",
                 data: null
             })
         }
 
         return res.status(200).json({
             status: "success",
             message: "Utilizador apagado com sucesso",
             data: deleteEmpresaResponse
         })
     }

}