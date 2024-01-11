
const config = {
  databaseURI: process.env.DATABASE_URI,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
  restAPIKey: process.env.REST_API_KEY,
  clientKey: process.env.CLIENT_KEY,
  javascriptKey: process.env.JAVASCRIPT_KEY,
  liveQuery: {}
// Example express application adding the parse-server module to expose Parse
// compatible API routes.
import dotenv from 'dotenv-flow';
dotenv.config();

import express from 'express';
import { ParseServer } from 'parse-server';
import path from 'path';
const __dirname = path.resolve();
import http from 'http';
};

const app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
const mountPath = process.env.PARSE_MOUNT || '/parse';
if (!test) {
  const api = new ParseServer(config);
  app.use(mountPath, api);
}

const port = process.env.PORT || 1337;
if (!test) {
  const httpServer = require('http').createServer(app);
  httpServer.listen(port, function () {
    console.log('parse-server running on port ' + port + '.');
  });
  // This will enable the Live Query real-time server
  ParseServer.createLiveQueryServer(httpServer);
}

module.exports = {
  app,
  config,
};
