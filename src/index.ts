import serverless from "serverless-http";
import { Application } from "serverless-http";
import fastifyEnv from "@fastify/env";
import fastify, { FastifyInstance } from "fastify";
import { envPluginOptions } from "./plugins/envPlugin";
import rootApi from "./api/rootApi";
import twitterApi from "./api/twitterApi";

const app: FastifyInstance = fastify({ logger: true });

app.register(fastifyEnv, envPluginOptions); // register dotenv for fastify
app
  .register(rootApi, { prefix: "/" })
  .register(twitterApi, { prefix: "/api/twitter" });

app.after();
app.ready();

if (require.main === module) {
  // for dev env
  app.listen({ port: 3002 });
}

const handler = serverless(app as Application);

export { handler };
