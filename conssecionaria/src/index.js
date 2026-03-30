const { format } = require("node:path")

function calcularValorTotal(dias) {
    let Valor = 1
    let Total = 0

    for (let i = 1; i <= dias; i++) {
        Total += Valor
        Valor *= 2

        console.log(
            `Dia: ${i} | parcela: ${Valor} | Total acumulado: ${Total}`
        )
    }

    return Total
}

const total = calcularValorTotal(30)

console.log("valor total a pagar", total)

