import { response, type Request, type Response } from "express"
import type { prestacaoServicoByCategoriaType, PrestacaoServicoDBType, ResponseType } from "../utils/types.js"
import { PrestacaoServicoModel } from "../models/prestacao-servico.model.js"

export const PrestacaoServicoController = {
    async create(req: Request, res: Response) {
        const prestacaoServico: PrestacaoServicoDBType = req.body

        if (!prestacaoServico) {
            return res.status(400).json({
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            })
        }

        const createPrestacaoServicoResponse = await PrestacaoServicoModel.create(prestacaoServico)

        if (!createPrestacaoServicoResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao criar prestacao de servico",
                data: null
            })
        }

        return res.status(201).json({
            status: "success",
            message: "Prestacao de servico criada com sucesso",
            data: createPrestacaoServicoResponse
        })
    },

    async getAll(req: Request, res: Response) {
        const getAllPrestacaoServicosResponse = await PrestacaoServicoModel.getAll()

        if (!getAllPrestacaoServicosResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicosResponse
        })
    },

    async getAllPrestacoesServicoByCategoria(req: Request, res: Response) {
        const { categoria } = req.params

        if (!categoria || Array.isArray(categoria)) {
            return res.status(400).json({
                status: "error",
                message: "Categoria obrigatoria",
                data: null
            })
        }

        const prestacoesServicoResponse = await PrestacaoServicoModel.getAllPrestacoesServicoBy(categoria)

        if (!prestacoesServicoResponse) {
            return res.status(404).json({
                status: "error",
                message: "Nenhuma prestacao de servico encontrada para esta categoria",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico por categoria buscadas com sucesso",
            data: prestacoesServicoResponse
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

        const getPrestacaoServicoByIdResponse = await PrestacaoServicoModel.get(id as string)

        if (!getPrestacaoServicoByIdResponse) {
            return res.status(404).json({
                status: "error",
                message: "Prestacao de servico nao encontrada",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico encontrada com sucesso",
            data: getPrestacaoServicoByIdResponse
        })
    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedPrestacaoServico: PrestacaoServicoDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedPrestacaoServico) {
            return res.status(400).json({
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            })
        }

        const updatePrestacaoServicoResponse = await PrestacaoServicoModel.update(id as string, updatedPrestacaoServico)

        if (!updatePrestacaoServicoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar prestacao de servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico atualizada com sucesso",
            data: updatePrestacaoServicoResponse
        })
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

        const deletePrestacaoServicoResponse = await PrestacaoServicoModel.delete(id as string)

        if (!deletePrestacaoServicoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar prestacao de servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico apagada com sucesso",
            data: deletePrestacaoServicoResponse
        })
    },

    async getAllPrestacaoServicoDetalhada(req: Request, res: Response) {
        const { limit, offset } = req.query as { limit: string, offset: string }

        let LIMIT = 10
        let OFFSET = 0

        if (limit && parseInt(limit) > 0) LIMIT = parseInt(limit)
        if (offset && parseInt(offset) > 0) OFFSET = parseInt(offset)

        const getAllPrestacaoServicosResponse = await PrestacaoServicoModel.getAllPrestacaoServicoDetalhada(LIMIT, OFFSET)

        if (!getAllPrestacaoServicosResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicosResponse
        })
    },
    async getAllPrestacaoServicoByCategoria(req: Request, res: Response) {
        const { categoria } = req.params
        const { limit,offset } = req.query as { limit: string, offset: string}

        let LIMIT = 10
        let OFFSET = 0

        if (limit && parseInt(limit) > 0) LIMIT = parseInt(limit)
        if (offset && parseInt(offset) > 0) OFFSET = parseInt(offset)

        if (!categoria) {
            const response: ResponseType<null> = {
            status: "error",
            message: "categoria obrigatório",
            data: null
        }
        return res.status(400).json(response)
        }
        
        const getAllPrestacaoServicosByCategoriaResponse = await PrestacaoServicoModel.getAllPrestacaoServicoByCategoria(categoria as string, LIMIT,OFFSET)

        if (getAllPrestacaoServicosByCategoriaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "prestacao de servico nao encontrada",
                data: null
            }
            return res.status(404).json(response)
        }
        const response: ResponseType<prestacaoServicoByCategoriaType[]> = {
            status: "error",
            message: "prestacao de servico encontrado com sucesso",
            data: getAllPrestacaoServicosByCategoriaResponse
        }
        return res.status(200).json(response)
    }
};
