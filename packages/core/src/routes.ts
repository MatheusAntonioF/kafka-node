import { Router } from 'express';

import { producer } from './server';

const routes = Router();

routes.get('/', async (request, response) => {
  const message = ' ------ MENSAGEM DE TESTE ------ ';

  await producer?.send({
    topic: 'message',
    messages: [{ value: message }],
  });

  return response.json({ ok: true });
});

export default routes;
