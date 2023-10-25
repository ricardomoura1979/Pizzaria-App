
// Importando as dependências
import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController'

// Criando o objeto de roteamento
const router = Router();

// // Definindo rota GET '/teste'
// router.get('/teste', (req: Request, res: Response) => {
//   // Retornando uma resposta JSON com a propriedade 'ok' definida como true
//   return res.json({ ok: true });
// });

// User Routes
router.post('/users', new CreateUserController().handle)

// Exportando o objeto de roteamento
export { router };
