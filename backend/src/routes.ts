
// Importando as dependências
import { Router, Request, Response } from 'express';

// Criando o objeto de roteamento
const router = Router();

// Definindo rota GET '/teste'
router.get('/teste', (req: Request, res: Response) => {
  // Retornando uma resposta JSON com a propriedade 'ok' definida como true
  return res.json({ ok: true });
});

// Exportando o objeto de roteamento
export { router };
