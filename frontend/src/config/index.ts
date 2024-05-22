const WALLET_CONNECT_ID: string | undefined =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;
const GOOGLE_AUTH_CLIENT_ID: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID;

if (!WALLET_CONNECT_ID) {
  throw new Error("provide a wallet connect project id in env variables");
}
if (!GOOGLE_AUTH_CLIENT_ID) {
  throw new Error("provide a google auth client id in env variables");
}

const config = {
  projectId: WALLET_CONNECT_ID,
  googleAuthClientId: GOOGLE_AUTH_CLIENT_ID,
};
export default config;
