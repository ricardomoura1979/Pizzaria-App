import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'

interface AuthRequest{
    email: string;
    password: string;
}



class AuthUserService{
    async execute({ email, password }: AuthRequest){
        //console.log(email);
        //verificar se o email existe

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }
        // verificar senha correta 
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/Pass incorrect")
        }

        return { ok: true }

    }
}

export { AuthUserService };
