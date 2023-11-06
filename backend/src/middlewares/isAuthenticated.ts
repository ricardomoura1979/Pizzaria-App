import { Payload } from '@prisma/client/runtime/library';
import {NextFunction, Request, Response} from 'express'

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction 

interface PayLoad{
    sub: string;
}

){
    // console.log("CHAMOU ESSE MIDDLEWARE")
    // return next();

    // receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();

    }


   const [, token] = authToken.split(" ")
   
   
   try{
    // validar esse token
    const { sub } = verify(
        token, 
        process.env.JWT_SECRET
    ) as Payload;

   } catch(err){
    return res.status(401).end();
   }
}


