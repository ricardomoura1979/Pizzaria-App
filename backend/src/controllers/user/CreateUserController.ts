
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




// This TypeScript code defines a class called CreateUserController that handles a request to create a user.

// The handle method is an asynchronous function that takes in an express Request object and a Response object. Inside the method, the req.body is destructured to extract the name, email, and password from the request body.

// A new instance of the CreateUserService class is created new CreateUserService(). This service is responsible for executing the logic to create a user, such as saving the user details to a database.

// The execute method of the createUserService object is called with an object as an argument, containing the name, email, and password of the user. This method is likely implemented to handle the creation of a user in a database or any other necessary operations.

// The execute method is awaited to ensure that the user creation process is completed before moving forward. The resulting user is assigned to the user variable.

// Finally, the res.json method is called with the user object as an argument to send a JSON response containing the created user details.

// Regarding performance and security considerations, it's important to ensure that the request payload and any database queries are properly validated and sanitized to prevent any vulnerabilities like SQL injection or cross-site scripting (XSS). Additionally, depending on the specific use case and requirements, it may be necessary to implement authentication and authorization checks before allowing user creation.

// To optimize the code, you could consider handling any potential errors that occur during the user creation process and providing meaningful error messages to the client. Additionally, you could implement input validation to ensure that the name, email, and password meet the required criteria before attempting to create a user.