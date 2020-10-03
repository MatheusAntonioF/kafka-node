import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'microservice',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'message-group' });

async function run() {
  await consumer.connect();

  await consumer.subscribe({ topic: 'message' });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`MENSAGEM RECEBIDA - [${topic}] -> ${message.value}`);
    },
  });
}

run().catch(console.error);
