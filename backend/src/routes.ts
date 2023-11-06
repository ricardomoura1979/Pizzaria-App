
// Importando as dependências
import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './services/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated';

// Criando o objeto de roteamento
const router = Router();

// // Definindo rota GET '/teste'
// router.get('/teste', (req: Request, res: Response) => {
//   // Retornando uma resposta JSON com a propriedade 'ok' definida como true
//   return res.json({ ok: true });
// });

// User Routes - users é chamado. Chama o Controller
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailuserController().handle)
// Exportando o objeto de roteamento
export { router };
