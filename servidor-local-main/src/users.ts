import db from "./lib/db.js"
import type { UserType } from "./utils/types.js"


export async function getUsers() {
    const [rows] = await db.execute("SELECT * FROM tbl_utilizadores")

    return rows
}

export async function getUserById(id: string) {
    // track query execution in function db.execute 
    console.log("getUserById", id)

    try {
        const [rows] = await db.execute(
            `SELECT * FROM tbl_utilizadores 
        WHERE tbl_utilizadores.id = ?`,

            [id]
        )

        if (Array.isArray(rows) && rows.length === 0) return null
        return Array.isArray(rows) ? rows[0] : null
    } catch (err) {
        console.log(err)
        return null
    }
}

export async function createUser(user: UserType) {
    try {
        const [rows] = await db.execute(
            `INSERT INTO tbl_utilizadores 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                user.id,
                user.nome,
                user.numero_identificacao,
                user.data_nascimento,
                user.email,
                user.telefone,
                user.pais,
                user.localidade,
                user.password,
                user.enabled,
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

export async function userServicos(servicos: any){
    try{
        const body = `
        INSERT INTO tbl_servicos
        (id, nome, descricao, categoria, enabled, created_at, updated_at)
values(?, ?, ?, ?, ?, ?, ?)
`;

const values = [
    null,
    servicos.nome,
    servicos.descricao,
    servicos.categoria,
    servicos.enabled,
    new Date(),
    new Date()
];

const [results] = await db.execute(body, values);
return results;
    }catch (error) {
        return null;
    }
}

export async function useOrcamento(orcamento: any) {
    try {
    const body = `
    INSERT INTO tbl_orcamento
    (id, total,id_utilizadores, enabled,created_at, updated_at)
    values (?,?,?,?,?,?)
    `;

    const values = [
        null,
        orcamento.total,
        orcamento.id_utilizadores,
        orcamento.enabled,
        new Date(),
        new Date()
    ];

    const [results] = await db.execute(body, values);
    return results;
} catch (error) {
    return null;
  }
}

export async function prestacaoServico() {
    try{
        const body =`
        INSERT INTO tbl_prestacao_servico
        (id,designacao, subtotal, horas_estimadas,id_prestador, id_servico, preco_hora, estado, id_orcamento, enabled, created_at, updated_at)`
    }
}



