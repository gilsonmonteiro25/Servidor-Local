import { categoriaModel } from "../../models/categoria.model.js";
import { empresaModel } from "../../models/empresa.model.js";
import { OrcamentoModel } from "../../models/orcamento.models.js";
import { PrestacaoServicoModel } from "../../models/prestacao-servico.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import { UserModel } from "../../models/users.model.js";
import type { deleteService } from "../../servico.js";
import type { PrestacaoServicoDBType, ServicoDBType } from "../../utils/types.js";



export const PrestacaoServicoResolver = {
    Query: {
        getAllPrestacaoService: async () => {
            return await PrestacaoServicoModel.getAll();
        },

        getPrestacaoServicoById: async (_: any, args: { id: string }) => {
            return await PrestacaoServicoModel.get(args.id)
        }
    },

    Mutation: {
        createPrestacaoService: async (_: any, args: { prestacaoservice: PrestacaoServicoDBType}) => {
            return await PrestacaoServicoModel.create(args.prestacaoservice);
        },
        updatedPrestacaoServico: async (_: any, args: { id: string, prestacaoservice: PrestacaoServicoDBType }) => {
            return await PrestacaoServicoModel.update(args.id, args.prestacaoservice);
        },
        deletePrestacaoService: async (_: any, args: { id: string }) => {
            return await PrestacaoServicoModel .delete(args.id,);
        }
    }, 

    prestacaoservico: {
        prestador: async (parent: { id_prestador: string }) => {
            return await PrestadorModel.get(parent.id_prestador);
        },

        servico: async (parent: { id_servico: string }) => {
            return await ServiceModel.get(parent.id_servico);
        },

         orcamento: async (parent: { id_orcamento: string }) => {
            return await OrcamentoModel.get(parent.id_orcamento);
    },
       utilizador: async (parent: { id_utilizador: string }) => {
            return await UserModel.get(parent.id_utilizador);
    },
       empresa: async (parent: { id_empresa: string }) => {
            return await empresaModel.get(parent.id_empresa);
        },
 }
}