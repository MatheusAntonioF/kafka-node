import express from 'express';

import { Kafka, Producer } from 'kafkajs';

import routes from './routes';

const app = express();

const kafka = new Kafka({
  clientId: 'core',
  brokers: ['localhost:9092'],
});

export const producer = kafka.producer();

app.use(express.json());

app.use(routes);

app.listen(3333, async () => {
  await producer.connect();

  console.log('Back end running 🚀');
});
