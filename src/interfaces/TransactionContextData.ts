import { TransactionsType } from "./TransactionType";
import { TransactionInput } from "./TransactionInput";

export interface TransactionContextData {
  transactions: TransactionsType[];
  createTransaction: (transacation: TransactionInput) => Promise<void>; 
};