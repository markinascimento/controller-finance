import { TransactionsType } from "./TransactionType";

export type TransactionInput = Omit<TransactionsType, 'id' | 'createdAt'>;