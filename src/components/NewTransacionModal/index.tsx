// -> Import do ReactJS
import { ChangeEvent, FormEvent, useState, useContext } from 'react';

// -> Import de Lib externa
import Modal from 'react-modal';

// -> Import da Context API
import { useTransactions } from '../../hooks/useTransactions';

// -> Import dos component
import Input from '../Input';

// -> Import do CSS
import { Container, TransactionTypeContainer, RadioBox } from './styles';

// -> Import dos Icons
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

// -> Import das tipagens do component 
import { NewTransactionModalProps } from '../../interfaces/NewTransactionProps';

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    await createTransaction({
      amount,
      title,
      category,
      type
    });

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

        <button 
          type="button" 
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeIcon} alt="Fechamento" />
        </button>

      <Container
        onSubmit={handleCreateNewTransaction}
      >
        <h2> Cadastrar transação </h2>

        <Input 
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <Input 
          type="number" 
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeIcon} alt="Entrada" />
            <span> Entrada </span>
          </RadioBox>

          <RadioBox 
            type='button'
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeIcon} alt="Saída" />
            <span> Saída </span>
          </RadioBox>
        </TransactionTypeContainer>

        <Input 
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
