import { Producer } from 'kafkajs';

// declare module 'express-serve-static-core' {
//   interface Request {
//     producer?: Producer;
//   }
// }

// declare namespace Express {
//   interface Request {
//     producer: Producer;
//   }
// }

declare global {
  namespace Express {
    interface Request {
      producer: Producer;
    }
  }
}
