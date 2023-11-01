

import prismaClient from "../../prisma";

import { hash } from "bcryptjs";
// receber email, name e password

interface UserRequest {
    name: string;
    email: string;
    password: string;

}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        
        // verificar se ele enviou um email
        if(!email){
            throw new Error("Email incorrect")
        }

        const passwordHash = await hash(password, 8)


        //verificar se email já está cadastrado

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const user = await prismaClient.user.create({
           data:{
            name: name,
            email: email,
            password: passwordHash,
           }
        })

        return user;

    }
}

export { CreateUserService }

// This code is written in TypeScript and it defines an interface called UserRequest and a class called CreateUserService.

// The UserRequest interface defines the shape of the object that should be passed as an argument to the execute method of the CreateUserService class. It specifies three properties: name of type string, email of type string, and password of type string. This interface ensures that the required properties are present when invoking the execute method.

// The CreateUserService class has an execute method that is asynchronous (denoted by the async keyword). This method takes an object as an argument and extracts the name, email, and password properties from it using destructuring. It then logs the name to the console and returns an object containing the `` property.

// The last of the code exports the CreateUserService class. This allows other modules or files to import and use this class.

// purpose of this code is to define a service or function that be used to create a user, where the user name, email, and password are supplied as arguments to the execute method. The code currently logs the name to the console and returns an object containing the name.

// Potential improvements or optimizations:

// Error handling: The code does not have any error handling mechanisms. It could be enhanced by adding proper error handling to handle any exceptions that may occur during user creation.
// Data validation: The code does not perform any validation on the user input. It would be a good idea to add validation logic to ensure the user inputs are in the correct format and meet any required criteria.
// Database integration: Currently, the code does not interact with a database or store the user data. It could be enhanced by integrating with a database layer to persist the created user.
// Password encryption: If security is a concern, the code should include a mechanism to securely store and encrypt user passwords, rather than storing them as plain text. This involves using hashing algorithms or encryption techniques. - Unit tests: It would be beneficial to add unit tests to verify the correctness of the CreateUserService functionality. This ensures that the service behaves as expected and helps detect any regressions when making changes to the code.
// Input sanitization: It is important to sanitize user inputs to prevent any potential security vulnerabilities, such as SQL injection or cross-site scripting (XSS) attacks. Implementing input sanitization or using a security library can help mitigate these risks.
// Password complexity: It could be valuable to enforce password complexity rules, such as minimum length, inclusion of special characters, and combinations of uppercase and lowercase letters. This helps enhance the security of user accounts.
// Email verification: Including an additional step to verify user email addresses can help prevent spam or fake accounts. This can be done by sending a verification link or code to the provided email address and requiring the user to confirm their email before fully activating their account.
// Logging: Implementing a logging system to capture important events or errors can be beneficial for troubleshooting and monitoring the application. Logging can help identify issues and track actions performed by users.
// User-friendly error messages: Enhance the error handling mechanism to provide more user-friendly and informative error messages. This can help users understand why their request failed and how to resolve any issues they encounter.
// Rate limiting: To prevent abuse or brute force attacks, implementing rate limiting mechanisms can restrict the number of requests a user can make within a specific time frame. This helps protect the application and its resources from excessive usage or malicious activities.