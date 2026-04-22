import { categoriaModel } from "../../models/categoria.model.js";
import { empresaModel } from "../../models/empresa.model.js";
import { OrcamentoModel } from "../../models/orcamento.models.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import { UserModel } from "../../models/users.model.js";
import type { deleteService } from "../../servico.js";
import type { OrcamentoDBType, PrestadorDBType, ServicoDBType } from "../../utils/types.js";


export const orcamentoResolver = {
    Query: {
        getAllorcamento: async () => {
            return await OrcamentoModel.getAll();
        },

        getOrcamentoById: async (_: any, args: { id: string }) => {
            return await OrcamentoModel.get(args.id)
        }
    },

    Mutation: {
        createOrcamento: async (_: any, args: { orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.create(args.orcamento);
        },
        updatedOrcamento: async (_: any, args: { id: string, orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.update(args.id, args.orcamento);
        },
        deleteOrcamento: async (_: any, args: { id: string }) => {
            return await OrcamentoModel .delete(args.id,);
        }
    }, 

    orcamento: {
        utilizador: async (parent: { id_utilizador: string }) => {
            return await UserModel.get(parent.id_utilizador);
        }
    }
    
}