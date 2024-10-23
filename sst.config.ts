/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nextjs-pnpm-2410",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/web")
    let db = await import("./infra/db")
    return {
      host: db.database.host,
      port: db.database.port,
      database: db.database.database,
      user: db.database.username,
      password: db.database.password,
      ssl: false
    }
  },
});
