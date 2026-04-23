import { gql } from "graphql-tag"

export const typeDefs = gql`
    
    enum TipoPrestador {
        PARATICULAR ,
        EMPRESA 
    }
        
    enum Role {
        CLIENTE ,
        ADMIN ,
        PRESTADOR ,
        EMPRESA 
    }

 enum EstadoProposta {
        PENDENTE ,
        ACEITE ,
        CANCELADO 
    }


type Utilizador {
        id: ID!,
        nome: String!,
        numero_identificacao: String!,
        data_nascimento: String!,
        email: String!,
        telefone: String!,
        pais: String!,
        localidade: String,
        password: String,
        role: Role
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }
       
    type Proposta {
        id: ID!,
        id_prestacao_servico: PrestacaoServico,
        preco_hora: Float!,
        horas_estimadas: Int,
        id_prestador: Prestador,
        estado: EstadoProposta,
        owner: String,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }
   

    type Service {
        id: ID!,
        nome: String!,
        descricao: String!,
        id_categoria: Categoria,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }

    type Prestador {
        id: ID!,
        taxaUrgencia: Int!,
        percentagemDesconto: Int!,
        minimoDesconto: Int!,
        nif: Int!,
        profissao: String,
        id_empresa:Empresa,
        id_utilizador: Utilizador,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }

    type PrestacaoServico {
        id: ID!,
        designacao: String!,
        subtotal: Int!,
        horas_estimadas: Int!,
        id_prestador: Prestador,
        id_servicos: Service,
        id_empresa: Empresa,
        tipo_prestador: TipoPrestador,
        preco_hora: Int!,
        urgente: Boolean,
        estado: EstadoPrestacao,
        id_orcamento: Orcamento,
        id_utilizadores: Utilizador,
        enabled: Boolean,
        created_at: String
        updated_at: String
    }
   
    enum EstadoPrestacao {
        PENDENTE ,
        FINALIZADO ,
        EM_PROCESSO ,
        CANCELADO 
    }

    type Orcamento {
        id: ID!,
        total: Int!,
        id_utilizadores: Utilizador,
        enabled: Boolean,
        created: String,
        updated: String
    }

    type Empresa {
        id: ID!,
        designacao: String,
        descricao: String,
        nif: String
        icone: String,
        id_utilizadores: Utilizador,
        localidade: String,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }


    type Categoria {
        id: ID!,
        designacao: String,
        icone: String,
        created_at: String,
        updated_at: String
    }
    type Query{
        getAllUsers: [Utilizador]
        getUserById(id: ID!): Utilizador
        getAllServices: [Service]
        getServiceById(id: ID!): Service
        getAllProposta:[Proposta]
        getPropostaById(id: ID!): Proposta
        getAllPrestador:[Prestador]
        getPrestadorById(id: ID!): Prestador
        getAllPrestacaoService: [PrestacaoServico]
        getPrestacaoServicoById(id: ID!): PrestacaoServico
        getAllorcamento: [Orcamento]
        getOrcamentoById(id: ID!): Orcamento
        getAllEmpresa: [Empresa]
        getEmpresaById(id: ID!): Empresa
        getAllCategoria: [Categoria]
        getCategoriaById(id: ID!): Categoria
}

    type Mutation{
    createUser(
        nome: String!,
        numero_identificacao: String!
        data_nascimento: String!
        email: String!
        telefone: String!
        pais: String!
        localizacao: String!
        password: String
        role: Role,
        enable: Boolean): Utilizador,
    updatedUser(
        id: ID!,
        nome: String!,
        numero_identificacao: String!,
        data_nascimento: String!,
        email: String!,
        telefone: String!,
        pais: String!,
        localidade: String,
        password: String,
        role: Role
        enabled: Boolean): Utilizador,
    deleteUser(id: ID!): Utilizador,
    createService(
        nome: String!,
        descricao: String!,
        id_categoria:  String,
        enabled: Boolean): Service,
    updateService(
        id: ID!,
        nome: String!,
        descricao: String!,
        id_categoria:  String,
        enabled: Boolean): Service,
    deleteService(id: ID!): Service,  
    createProposta(    
        estado: EstadoProposta,
        owner: String,
        enabled: Boolean): Proposta,
    updateProposta(
        id: ID!,
        id_prestacao_servico:  String,
        preco_hora: Float!,
        horas_estimadas: Int,
        id_prestador:  String,
        estado: EstadoProposta,
        owner: String,
        enabled: Boolean): Proposta,
    deleteProposta(id: ID!): Proposta,
    createPrestador(
        taxaUrgencia: Int!,
        percentagemDesconto: Int!,
        minimoDesconto: Int!,
        nif: Int!,
        profissao: String,
        id_empresa:  String,
        id_utilizador:  String,
        enabled: Boolean): Prestador,
    updatedPrestador(
         id: ID!,
        taxaUrgencia: Int!,
        percentagemDesconto: Int!,
        minimoDesconto: Int!,
        nif: Int!,
        profissao: String,
        id_empresa:  String,
        id_utilizador:  String,
        enabled: Boolean): Prestador,
    deletePrestador(id: ID!): Prestador,
    createPrestacaoService(
        designacao: String!,
        subtotal: Int!,
        horas_estimadas: Int!,
        id_prestador:  String,
        id_servicos:  String,
        id_empresa: String,
        tipo_prestador: TipoPrestador,
        preco_hora: Int!,
        urgente: Boolean,
        estado: EstadoPrestacao,
        id_orcamento: String,
        id_utilizadores: String,
        enabled: Boolean): PrestacaoServico,
    updatedPrestacaoServico(
        id: ID!,
        designacao: String!,
        subtotal: Int!,
        horas_estimadas: Int!,
        id_prestador: String,
        id_servicos: String,
        id_empresa: String,
        tipo_prestador: TipoPrestador,
        preco_hora: Int!,
        urgente: Boolean,
        estado: EstadoPrestacao,
        id_orcamento: String,
        id_utilizadores: String,
        enabled: Boolean): PrestacaoServico,
    deletePrestacaoService(id: ID!): PrestacaoServico,
    createOrcamento(
        total: Int!,
        id_utilizadores: String,
        enabled: Boolean): Orcamento,
    updatedOrcamento(
         id: ID!,
        total: Int!,
        id_utilizadores: String,
        enabled: Boolean): Orcamento,
    deleteOrcamento(id: ID!): Orcamento,
    createEmpresa(
        designacao: String,
        descricao: String,
        nif: String
        icone: String,
        id_utilizadores: String,
        localidade: String,
        enabled: Boolean): Empresa,
    updatedEmpresa(
     id: ID!,
        designacao: String,
        descricao: String,
        nif: String
        icone: String,
        id_utilizadores: String,
        localidade: String,
        enabled: Boolean): Empresa,
    deleteEmpresa(id: ID!): Empresa,
    createCategoria(
        designacao: String,
        icone: String): Categoria,
    updatedCategoria(
         id: ID!,
        designacao: String,
        icone: String): Categoria,
    deleteCategoria(id: ID!): Categoria,
}
`

