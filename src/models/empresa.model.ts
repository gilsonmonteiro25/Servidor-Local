import type { RowDataPacket } from "mysql2"
import db from "../lib/db.js"
import type { empresaDBType } from "../utils/types.js"





export const empresaModel = {
    async create(empresa: empresaDBType) : Promise<empresaDBType | null> {
        try {
            const [rows] = await db.execute<empresaDBType & RowDataPacket[]>(
                `INSERT INTO tbl_Empresa
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    
                    empresa.id,
                    empresa.designacao,
                    empresa.descricao,
                    empresa.nif,
                    empresa.icone,
                    empresa.id_utilizador,
                    empresa.localizacao,
                    empresa.enabled,
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
    },

 async getAll() : Promise<empresaDBType[]| null> {
        const [rows] = await db.execute<empresaDBType[] & RowDataPacket[]>("SELECT * FROM tbl_Empresa")

        return rows
    },

    async get(id: string): Promise<empresaDBType | null> {
        try {
            const [rows] = await db.execute<empresaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_Empresa
                WHERE tbl_Empresa.id = ?`,
                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as empresaDBType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },



 async update(id: string, empresaAtualizada: empresaDBType) {
        try {
            const [rows] = await db.execute(
                `UPDATE tbl_empresa 
                SET
                    id =?,
                    designacao = ?,
                    descricao = ?,
                    nif ? = ?,
                    icone = ?,
                    utilizador = ?,
                    localizacao = ?,
                    enabled = ?, 
                    updated_at = ?
                WHERE id = ?`,

                [
                    empresaAtualizada.designacao,
                    empresaAtualizada.descricao,
                    empresaAtualizada.nif,
                    empresaAtualizada.icone,
                    empresaAtualizada.id_utilizador,
                    empresaAtualizada.localizacao,
                    empresaAtualizada.enabled,
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
    },

 async delete(id: string) : Promise<empresaDBType | null> {
        try {
            const rows: any = await db.execute<empresaDBType & RowDataPacket[]>(
                `DELETE FROM tbl_Empresa 
                WHERE id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0]
        } catch (err) {
            console.log(err)
            return null
        }
    }
    
}