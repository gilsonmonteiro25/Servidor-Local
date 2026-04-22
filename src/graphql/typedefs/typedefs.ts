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
        enabled: boolean,
        created_at: string,
        updated_at: string
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
        taxaUrgencia: INT!,
        percentagemDesconto: INT!,
        minimoDesconto: INT!,
        nif: INT!,
        profissao: String,
        id_empresa:Empresa,
        id_utilizador: Utilizador,
        enabled: boolean,
        created_at: string,
        updated_at: string
    }

    type PrestacaoServico {
        id: ID!,
        designacao: String!,
        subtotal: INT!,
        horas_estimadas: INT!,
        id_prestador: Prestador,
        id_servicos: Servico,
        id_empresa: Empresa,
        tipo_prestador: TipoPrestador,
        preco_hora: INT!,
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
        total: INT!,
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
        icone: "",
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
}`

