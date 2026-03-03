import express, { type Request, type Response } from "express"
import { adicionarServico, apagarServico, listarServicos, obterServico } from "./servico.js"
import { calcularOrcamento, criarPrestadoresDeServico, selecionarPrestadoresDeServicos, selecionarServicos } from "./orcamento.js"

const app = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

// rota para adicionar um serviço novo
app.post("/adicionar-servico", (req: Request, res: Response) => {
  const novoServico = req.body

  const addServicoResponse = adicionarServico(novoServico)

  res.json(addServicoResponse)
})

// rota para listar todos os servicos
app.get("/listar-servicos", (req: Request, res: Response) => {
  const listServicoResponse = listarServicos()

  res.json(listServicoResponse)
})

// rota para apagar um servico
app.delete("/apagar-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const apagarServicoResponse = apagarServico(nome as string)

    res.json(apagarServicoResponse)
  } else {
    res.json({
      message: "Nome do servico eh obrigatorio"
    })
  }
})

// rota para obter servico pelo nome 
app.get("/obter-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const obterServicoResponse = obterServico(nome as string)

    res.json(obterServicoResponse)
  } else {
    res.json({
      message: "Nome do servico eh obrigatorio"
    })
  }
})

// rota para selecionar servicos
app.post("/selecionar-servico", (req: Request, res: Response) => {
  const { nome } = req.body

  const selecinarServicoResponse = selecionarServicos(nome as string)

  res.json(selecinarServicoResponse)
})

// rota para calcular orcamento
app.post("/calcular-orcamento", (req: Request, res: Response) => {
  const { pedido } = req.body

  const calcularOrcamentoresponse = calcularOrcamento(pedido)

  res.json({
    message: "Orcamento calculado com sucesso",
    orcamentoTotal: calcularOrcamentoresponse
  })
})

//rota para selecionar prestar de servicos
app.post("/selecionar-prestador",(req: Request,res: Response) =>{
  const { nomeDoPrestador } = req.body

  const selecionarPrestadorResponse = selecionarPrestadoresDeServicos(nomeDoPrestador as string)

  res.json({
    message: "prestador de servico selecionado con sucesso",
    prestadorSelecionado:selecionarPrestadorResponse
  })
})






//rota parta criar prestadores de servicos
app.post("/criar-prestador", (req: Request, res: Response) => {
  const {novoPrestador} = req.body
  const criarPrestadorResponse = criarPrestadoresDeServico(novoPrestador)
  res.json(criarPrestadorResponse)
})




console.log(servico)

 const AddServicoResponse = adicionarservico(servico)
 res.json(AddServicoResponse)
 })


//rota para listar todos os serviços
app.get("/listar-servico", (req: Request, res: Response) => {
const listServicoResponse = listarServicos()

res.json(listServicoResponse)
})


//rota para apagar umm servico
app.delete("/apagar-servico", (req: Request, res: Response) => {
    const { nome } = req.query
   
    if (nome) {
        const apagarServicoResponse = apagarServico(nome as string)

        res.json(apagarServicoResponse)
    }else {
        res.json({
            message:"Name do servico eh obrigatorio"
        })
    }
    })

app.get("/obter-servico", (req: Request, res: Response) => {
    const {nome} = req.query
    if (nome) {
        const obterServicoResponse = obterServico(nome as string)
res.json({
    message: "Nome do servico eh obrigatorio"
      })
    }
})

// rota para selecionar servicos
app.post("/selecionar-servico", (req: Request, res: Response) => {
    const {nome} = req.body

    const selecionarServicoResponse = seleccionarServicos(nome as string)
    res.json(selecionarServicoResponse)
})


// rota para selecionar servicos
app.post("/calcular-orcamento", (req: Request, res: Response) => {
    const { pedido } = req.body

const calcularorcamentoresponse = calcularOrcamento(pedido)
res.json(calcularorcamentoresponse)
})
app.listen(8080, () => {
  console.log("Server running on port 8080")
})