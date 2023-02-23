import { FastifyInstance } from "fastify";

const twitterApi = async (app: FastifyInstance, _options: any, done: any) => {
  app.get("/", async () => ({
    message: `"hello froms twitter 🐣 ${process.env.TWITTER_API_KEY}"`,
  }));
  done();
};

export default twitterApi;
