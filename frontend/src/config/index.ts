import Joi from "joi";
import { Address } from "viem";

export interface EnvVars {
  NEXT_PUBLIC_WALLET_CONNECT_ID: string;
  NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID: string;
  NEXT_PUBLIC_FLIP_COIN_CONTRACT_ADDRESS: string;
}

const envSchema = Joi.object<EnvVars>({
  NEXT_PUBLIC_WALLET_CONNECT_ID: Joi.string().required(),
  NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID: Joi.string().default("test_abc"),
  NEXT_PUBLIC_FLIP_COIN_CONTRACT_ADDRESS: Joi.string()
    .pattern(new RegExp("0x\s*"))
    .required(),
}).unknown(true);

const isWindow = global.window !== undefined;

if (!isWindow) {
  const { error, value } = envSchema.validate(process.env, {
    abortEarly: false,
  });

  if (error) {
    throw `Config validation error : ${error}`;
  }
}

const config = {
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
  googleAuthClientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
  flipCoinAddress: process.env.NEXT_PUBLIC_FLIP_COIN_CONTRACT_ADDRESS as Address,
};

export default config;
