import type {Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


export default function AuthMiddlewere(req: Request, res: Response, next: NextFunction) {
   const authHeader = req.headers.authorization

   if (!authHeader) {
    return res.status(401).json({ message: "utilizador nao authenticado"})
   }

   const token = authHeader.split("")[1]


   try {
       const decodedtoken = jwt.verify(token as string,process.env.jwt_SECRET as string)

       next()

     } catch (error) {
    return res.status(401).json({message: "token invalido"})
     }
   }



/*
    req: {
       headers: {
            authorization: " bearer ftfiyertfgulrurliçoyt7rytkhftyryutyurtyejklrtyjdfty"

        }
    }

*/