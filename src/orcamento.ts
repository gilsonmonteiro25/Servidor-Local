interface pedidoServico {
    cliente: string,
    descricoa: string,
    horasEstimadas: number,
    urgente: boolean
};

function processarPedido (pedido: pedidoServico, precoHora: number) {
    const valorBase = pedido.horasEstimadas * precoHora;
    const taxaUrgencia= pedido.urgente ? valorBase + valorBase * 0.3 :0
    const valorTotal = valorBase + taxaUrgencia

return {
    valorTotal: valorTotal
 }
}