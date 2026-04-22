import { categoriaModel } from "../../models/categoria.model.js";
import { empresaModel } from "../../models/empresa.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import { UserModel } from "../../models/users.model.js";
import type { deleteService } from "../../servico.js";
import type { empresaDBType, PrestadorDBType, ServicoDBType } from "../../utils/types.js";


export const EmpresaResolver = {
    Query: {
        getAllEmpresa: async () => {
            return await empresaModel.getAll();
        },

        getEmpresaById: async (_: any, args: { id: string }) => {
            return await empresaModel.get(args.id)
        }
    },

    Mutation: {
        createEmpresa: async (_: any, args: { empresa: empresaDBType }) => {
            return await empresaModel.create(args.empresa);
        },
        updatedEmpresa: async (_: any, args: { id: string, empresa: empresaDBType }) => {
            return await empresaModel.update(args.id, args.empresa);
        },
        deleteEmpresa: async (_: any, args: { id: string }) => {
            return await empresaModel .delete(args.id,);
        }
    }, 

    empresa: {
        utilizador: async (parent: { id_utilizador: string }) => {
            return await UserModel.get(parent.id_utilizador);
        }
    }
    
}