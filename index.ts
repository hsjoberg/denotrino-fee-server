import { request } from "./jsonrpc.ts";

type IGetblockcountResponse = number;
export async function estimatesmartfee() {
  const response = await request("estimatesmartfee", [1]);
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.result as IGetblockcountResponse;
}


console.log((await estimatesmartfee()))
