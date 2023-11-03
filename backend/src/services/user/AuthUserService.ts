import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string;
    password: string;
}



class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //console.log(email);
        //verificar se o email existe

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("User/password incorrect")
        }
        // verificar senha correta 
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("User/Pass incorrect")
        }

        // gerar token JWT e devolver os dados do usuario como id, name e email. Gerando token do usuario:

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return { 
            id: user.id,
            email:user.email,
            token: token
        }

    }
}

export { AuthUserService };
