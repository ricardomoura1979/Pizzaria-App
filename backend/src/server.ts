// Importando as dependências
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import cors from 'cors';


import { router } from  './routes';

// Criando a instância do aplicativo Express
const app = express();

// Configurando o Express para lidar com solicitações JSON
app.use(express.json());

app.use(cors());

// Usando as rotas importadas do módulo 'router'
app.use(router);

// Configurando um middleware para lidar com erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      // Se o erro for uma instância da classe Error
      return res.status(400).json({
        error: err.message
      });
    }
    
    // Se o erro não for uma instância da classe Error
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error.'
    });
  });
  
// Iniciando o servidor na porta 3333 e exibindo uma mensagem ao iniciar
app.listen(3333, () => console.log('Servidor Online!'));