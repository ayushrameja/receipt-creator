import { receipts } from "./Receipts";
import { IReceipt } from "../interfaces/IReceipt";

export const getReceipt = (id: string): IReceipt | null => {
  const receipt: IReceipt = receipts[id];

  if (!receipt) return null;
  return receipt;
};

export const getReceipts = (): IReceipt[] => {
  return Object.values(receipts);
};
