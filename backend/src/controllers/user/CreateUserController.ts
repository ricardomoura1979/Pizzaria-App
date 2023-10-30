
import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
    async handle( req: Request, res: Response){
        const { name, email, password } = req.body; //Controller pega os dados do Body

        const createUserService = new CreateUserService(); // Inicializa o serviço

        const user = await createUserService.execute ({
            name,
            email,
            password
        }); //Executa o serviço - ex.: cadastrar no banco de dados. Devolver o usuario como user
        
        return res.json(user)
    }
}

export { CreateUserController }