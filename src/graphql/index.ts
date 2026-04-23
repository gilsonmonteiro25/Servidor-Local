
import { CategoriaResolver } from "./resolvers/categoria.resolver.js"
import { EmpresaResolver } from "./resolvers/empresa.resolver.js"
import { orcamentoResolver } from "./resolvers/orcamento.resolver.js"
import { PrestacaoServicoResolver } from "./resolvers/prestacao-servico.resolver.js"
import { PrestadorResolver } from "./resolvers/prestador.resolver.js"
import { PropostaResolver } from "./resolvers/proposta.resolver.js"
import { ServiceResolver } from "./resolvers/servico.resolver.js"
import { userResolver } from "./resolvers/users.resolver.js"
import { typeDefs } from "./typedefs/typedefs.js"

export const resolvers = {
    Query: {
        ...userResolver.Query,
        ...ServiceResolver.Query,
        ...PropostaResolver.Query,
        ...PrestadorResolver.Query,
        ...PrestacaoServicoResolver.Query,
        ...orcamentoResolver.Query,
        ...EmpresaResolver.Query,
        ...CategoriaResolver.Query
    },
    Mutation:{
        ...userResolver.Mutation,
        ...ServiceResolver.Mutation,
        ...PropostaResolver.Mutation,
        ...PrestadorResolver.Mutation,
        ...PrestacaoServicoResolver.Mutation,
        ...orcamentoResolver.Mutation,
        ...EmpresaResolver.Mutation,
        ...CategoriaResolver.Mutation
    }
}
export  {typeDefs} 