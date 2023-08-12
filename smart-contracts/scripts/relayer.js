const { Relayer } = require("@openzeppelin/defender-relay-client");


const {
  DefenderRelayProvider,
  DefenderRelaySigner,
} = require("@openzeppelin/defender-relay-client/lib/ethers");
require("dotenv").config();
const { RELAYER_API_KEY, RELAYER_API_SECRET } = process.env;
const credentials = { apiKey: RELAYER_API_KEY, apiSecret: RELAYER_API_SECRET };
const provider = new DefenderRelayProvider(credentials);
const signer = new DefenderRelaySigner(credentials, provider, {
  speed: "fast",
});
