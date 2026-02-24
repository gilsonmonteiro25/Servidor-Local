interface pedidoServico {
    cliente: string,
    descricoa: string,
    horasEstimadas: number,
    urgente: boolean
};

function processarPedido (pedido: pedidoServico, precoHora: number) {
    const valorBase = pedido.horasEstimadas * precoHora;
    const valorFinal = pedido.urgente
    ? valorBase + valorBase * 1.3
    : valorBase;
}
return {
    valorFinal: 
}
