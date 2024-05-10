const WALLET_CONNECT_ID: string | undefined =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

if (!WALLET_CONNECT_ID) {
  throw new Error("provide a wallet connect project id in env variables");
}

const config = {
  projectId: WALLET_CONNECT_ID,
};
export default config;
