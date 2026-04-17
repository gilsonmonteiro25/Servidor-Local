import { categoriaModel } from "../models/categoria.model.js"
import type { categoriaDBType, ResponseType } from "../utils/types.js"
import type { Request, Response } from "express"

export const categoriaController = {
    async create(req: Request, res: Response) {
        const categoria: categoriaDBType = req.body

        if (!categoria) {
            return res.status(400).json({
                status: "error",
                message: "Dados de Categoria invalidos",
                data: null
            })
        }

        console.log(categoria)

        const createCategoriaResponse: categoriaDBType | null = await categoriaModel.create(categoria)
        const response:  ResponseType<categoriaDBType> = {
                status: "success",
                message: "Categoria criado com sucesso",
                data: createCategoriaResponse
        }

        return res.json(createCategoriaResponse)
    },

async getAll(req: Request, res: Response) {
        const getAllCategoriaResponse = await categoriaModel.getAll()

        if (!getAllCategoriaResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar utilizadores",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Categoria buscados com sucesso",
            data: getAllCategoriaResponse
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

        const updatedCategoria: categoriaDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedCategoria) {
            return res.status(400).json({
                status: "error",
                message: "Dados de Categoria invalidos",
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
 
         const deleteCategoriaResponse = await categoriaModel.delete(id as string)
 
         if (!deleteCategoriaResponse) {
             return res.status(400).json({
                 status: "error",
                 message: "Erro ao apagar categoria",
                 data: null
             })
         }
 
         return res.status(200).json({
             status: "success",
             message: "Utilizador apagado com sucesso",
             data: deleteCategoriaResponse
         })
     }

}