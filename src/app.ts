import fastify, { FastifyInstance } from "fastify";
import { Application } from "serverless-http";

const app: FastifyInstance = fastify({ logger: true });

app.get("/", async () => {
  return { message: "Hello from fastify 🐯!" };
});

export default app as Application;
