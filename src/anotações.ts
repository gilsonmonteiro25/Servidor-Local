interface AlunosType {
    nome: string;
    endereco: string;
    contacto: string | null;
}

const alunos: Array<AlunosType> = [
    {
        nome: "Ana",
        endereco: "Rua A",
        contacto: "9000000"
    },
    {
        nome: "Bento",
        endereco: "Rua B",
        contacto: "9000000"
    },
    {
        nome: "Elly",
        endereco: "Rua C",
        contacto: "9000000"
    },

]

let horasTrabalhadas: number = 10;
let precoHora: number = 10;
let TaxaUrgencia: number = 10;
let desconto: number = 10;
let total: number = 10;

let variavel: string = "variavel";
desconto === TaxaUrgencia && desconto > TaxaUrgencia ?
    TaxaUrgencia += desconto : TaxaUrgencia -= desconto;

total = (horasTrabalhadas * precoHora) + TaxaUrgencia - desconto;

