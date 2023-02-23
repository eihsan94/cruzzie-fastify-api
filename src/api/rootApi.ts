import { FastifyInstance } from "fastify";

const rootApi = (app: FastifyInstance, _options: any, done: any) => {
  app.get("/", async () => ({
    message: `"Fastify initialized 🐯"`,
  }));
  done();
};

export default rootApi;
