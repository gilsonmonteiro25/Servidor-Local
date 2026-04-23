import { categoriaModel } from "../../models/categoria.model.js";
import { empresaModel } from "../../models/empresa.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import { UserModel } from "../../models/users.model.js";
import type { deleteService } from "../../servico.js";
import type { PrestadorDBType, ServicoDBType } from "../../utils/types.js";


export const PrestadorResolver = {
    Query: {
        getAllPrestador: async () => {
            return await PrestadorModel.getAll();
        },

        getPrestadorById: async (_: any, args: { id: string }) => {
            return await PrestadorModel.get(args.id)
        }
    },

    Mutation: {
        createPrestador: async (_: any, args: { prestador: PrestadorDBType }) => {
            return await PrestadorModel.create(args.prestador);
        },
        updatedPrestador: async (_: any, args: { id: string, prestador: PrestadorDBType }) => {
            return await PrestadorModel.update(args.id, args.prestador);
        },
        deletePrestador: async (_: any, args: { id: string }) => {
            return await PrestadorModel .delete(args.id,);
        }
    }, 

    Prestador: {
        empresa: async (parent: { id_empresa: string }) => {
            return await empresaModel.get(parent.id_empresa);
        },

         utilizador: async (parent: { id_utilizador: string }) => {
            return await UserModel.get(parent.id_utilizador);
        },
        }
    }
    
