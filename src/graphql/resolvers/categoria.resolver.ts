import { categoriaModel } from "../../models/categoria.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import type { deleteService } from "../../servico.js";
import type { categoriaDBType, ServicoDBType } from "../../utils/types.js";


export const CategoriaResolver = {
    Query: {
        getAllCategoria: async () => {
            return await categoriaModel.getAll();
        },

        getCategoriaById: async (_: any, args: { id: string }) => {
            return await categoriaModel.get(args.id)
        }
    },

    Mutation: {
        createCategoria: async (_: any, args: { categoria: categoriaDBType }) => {
            return await categoriaModel.create(args.categoria);
        },
        updatedCategoria: async (_: any, args: { id: string, categoria: categoriaDBType }) => {
            return await categoriaModel.update(args.id, args.categoria);
        },
        deleteCategoria: async (_: any, args: { id: string }) => {
            return await categoriaModel .delete(args.id,);
        }
    }, 

    categoria: {
        categoria: async (parent: { id: string }) => {
            return await categoriaModel.get(parent.id);
        }
    }
    
}