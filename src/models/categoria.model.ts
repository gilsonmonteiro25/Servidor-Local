import type { RowDataPacket } from "mysql2"
import db from "../lib/db.js"
import type { categoriaDBType } from "../utils/types.js"

 

 export const categoriaModel = {
    async create(categoria: categoriaDBType) : Promise<categoriaDBType| null> {
        try {
            const [rows] = await db.execute<categoriaDBType & RowDataPacket[]>(
                `INSERT INTO tbl_Empresa
             VALUES (?, ?, ?, ?, ?)`,
                [
                     categoria.id,
                     categoria.designacao,
                     categoria.icone,
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

 async getAll() : Promise<categoriaDBType[]| null> {
        const [rows] = await db.execute<categoriaDBType[] & RowDataPacket[]>("SELECT * FROM tbl_Categoria")

        return rows
    },

    async get(id: string): Promise<categoriaDBType | null> {
        try {
            const [rows] = await db.execute<categoriaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_Categoria
                WHERE tbl_Categoria.id = ?`,
                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as categoriaDBType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },



 async update(id: string, categoriaAtualizada: categoriaDBType) {
        try {
            const [rows] = await db.execute(
                `UPDATE tbl_empresa 
                SET
                    id =?,
                    designacao = ?,
                    icone = ?,
                    updated_at = ?
                WHERE id = ?`,

                [
                    categoriaAtualizada.designacao,
                    categoriaAtualizada.icone,
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

 async delete(id: string) : Promise<categoriaDBType | null> {
        try {
            const rows: any = await db.execute<categoriaDBType & RowDataPacket[]>(
                `DELETE FROM tbl_Categoria 
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