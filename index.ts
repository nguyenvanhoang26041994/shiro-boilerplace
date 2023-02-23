import { Server, gRPC } from './packages/shibajs';
import SuperfundController from './app/controllers/SuperfundController';

const server = new Server({
  PORT: process.env.PORT,
});

server.registerControllers([
  new SuperfundController(),
]);
server.start(() => {
  console.log('Server started!');
});

const gRPCServer = new gRPC({});
gRPCServer.start();

export { server, gRPCServer };
