import { useState } from 'react';

import Modal from 'react-modal';

import { TransactionProvider } from '../../hooks/useTransactions';

import { StylesGlobal } from "../../styles/global"

import { Dashboard } from "../Dashboard";
import { Header } from '../Header';
import { NewTransactionModal } from '../NewTransacionModal';

export function App() {
  const [isNewTransacionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal (){
    setIsNewTransactionModalOpen(false);
  }

  Modal.setAppElement("#root");

  return (
    <TransactionProvider>
      <StylesGlobal/>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}
