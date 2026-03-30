import db from "./lib/db.js"
import type { PrestadorDBType } from "./utils/types.js"
import { generateUUID } from "./utils/uuid.js"

class Prestador {
    nome: string
    precoHora: number
    profissao: string
    minimoParaDesconto: number
    percentagemDesconto: number
    taxaUrgencia: number

    constructor(
        nomeDoPrestador: string,
        precoHoraDoPrestador: number,
        profissaoDoPrestador: string,
        minimoParaDescontoDoPrestador: number,
        percentagemDescontoDoPrestador: number,
        taxaUrgenciaDoPrestador: number
    ) {
        this.nome = nomeDoPrestador
        this.precoHora = precoHoraDoPrestador
        this.profissao = profissaoDoPrestador
        this.minimoParaDesconto = minimoParaDescontoDoPrestador
        this.percentagemDesconto = percentagemDescontoDoPrestador
        this.taxaUrgencia = taxaUrgenciaDoPrestador
    }

    alterarPrecoHora(novoPrecoHora: number) {
        this.precoHora = novoPrecoHora
    }

    alterarNome(novoNome: string) {
        this.nome = novoNome
    }
}
export async function create(prestador:PrestadorDBType) {
     try {
            const [rows] = await db.execute(
                `INSERT INTO tbl_prestadores 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,

                [
                    generateUUID(),
                    prestador.taxa_urgencia,
                    prestador.percentagem_desconto,
                    prestador.minimo_desconto,
                    prestador.nif,
                    prestador.profissao,
                    prestador.enable,
                    new Date(),
                    new Date()
                ]
            )
            console.log({ rows })
            return rows
        } catch (err) {
            console.log(err)
            return null
        }
}

export async function getAll() {
          const [rows] = await db.execute("SELECT * FROM tbl_prestadores")

        return rows
    }

    export async function get(id: string) {
          try {
            const [rows] = await db.execute(
                `SELECT * FROM tbl_prestadores 
                WHERE tbl_prestadores.id = ?`,

                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] : null
        } catch (err) {
            console.log(err)
            return null
        }
    }

    export async function update(id:string, prestador:PrestadorDBType) {
         try {
            const [rows] = await db.execute(
                `UPDATE tbl_prestadores 
                SET taxa_urgencia = ?, 
                percentagem_desconto = ?, 
                minimo_desconto = ?, 
                nif = ?, 
                profissao = ?, 
                enable = ?, 
                updated_at = ?
                WHERE id = ?`,

                [
                    prestador.taxa_urgencia,
                    prestador.percentagem_desconto,
                    prestador.minimo_desconto,
                    prestador.nif,
                    prestador.profissao,
                    prestador.enable,
                    new Date(),
                    id
                ]
            )
            console.log({ rows })
            return rows
        } catch (err) {
            console.log(err)
            return null
        }
    }
    export async function deletePrestador(id: string) {
         try {
            const rows: any = await db.execute(
                `DELETE FROM tbl_prestadores 
                WHERE id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0]
        } catch (err) {
            console.log(err)
            return null
        }
    }

