require('dotenv').config();
const ParseServer = require("parse-server").ParseServer;
const Parse = require("parse/node");
const path = require("path");
jasmine.DEFAULT_TIMEOUT_INTERVAL =
  process.env.PARSE_SERVER_TEST_TIMEOUT || 100000;
const config = {
  databaseURI: process.env.DB_URI || "mongodb://localhost:27017/dev",
  appId: "test",
  javascriptKey: "test",
  restAPIKey: "test",
  masterKey: "test",
  serverURL: "http://localhost:1337/parse",
  cloud: path.resolve(__dirname, "../../cloud/main.js"),
  logLevel: 'WARN'
};
const configureServer = async () => {
  const api = new ParseServer(config);

  const app = require("express")();

  app.use("/parse", api);

  app.listen(1337, function () {
    console.log("parse-server-example running on port 1337.");
  });
};

const configureClient = async () => {
  Parse.initialize(config.appId, config.javascriptKey, config.masterKey);
  Parse.serverURL = config.serverURL;
};

const configure = async () => {
  await configureServer();
  await configureClient();
};

beforeAll(async () => {
  await configure();
});
global.Parse = Parse;
