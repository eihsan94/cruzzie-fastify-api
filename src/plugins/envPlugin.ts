const schema = {
  type: "object",
  required: ["TWITTER_API_KEY"],
  properties: {
    TWITTER_API_KEY: {
      type: "string",
    },
  },
};

export const envPluginOptions = {
  confKey: "config",
  schema,
  dotenv: true,
  data: process.env,
};
