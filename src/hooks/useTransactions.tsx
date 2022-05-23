// -> Import do ReactJS
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// -> Import da API
import { api } from '../services/api';

// -> Import das tipagens dos components
import { TransactionsType } from '../interfaces/TransactionType';
import { ContextTransactionProps } from '../interfaces/ContextTransactionProps';
import { TransactionInput } from '../interfaces/TransactionInput';
import { TransactionContextData } from '../interfaces/TransactionContextData';

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: ContextTransactionProps) {

  const [transactions, setTransactions] = useState<TransactionsType[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => {
        setTransactions(response.data.transactions);
      })
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', { 
      ...transactionInput,
      createdAt: new Date() 
    });
    const { transaction } = response.data;

    setTransactions(prevState => [
      ...prevState,
      transaction
    ]);
  }

  return (
    <TransactionContext.Provider value={{ 
      transactions,
      createTransaction 
    }}>
      {children}
    </TransactionContext.Provider>
  );
}


export function useTransactions (){
  const context = useContext(TransactionContext);

  return context;
};