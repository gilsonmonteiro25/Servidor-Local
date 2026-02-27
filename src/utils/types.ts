
export interface pedidoServicoType {
    cliente: string,
    descricoa: string,
    horasEstimadas: number,
    urgente: boolean
};
export interface ResponseType {
    sucesso: boolean,
    mensage:string,
    data: servicoType | null,
}

export interface servicoType {
    nome: string,
    precoHora: number,
    categoria: string,
    minimodescontado: number,
    percentagendescontado: number,
}