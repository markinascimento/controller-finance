// -> Import do ReactJS
import { useContext } from 'react';

// -> Import da Context API
import { useTransactions } from '../../hooks/useTransactions';

// -> Import do CSS
import { Container } from './styles';

// -> Import das Images / Icons
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <small> Entradas </small>
          <img src={incomeIcon} alt="Entradas" />
        </header>
        <strong> 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)} 
        </strong>
      </div>

      <div>
        <header>
          <small> Saídas </small>
          <img src={outcomeIcon} alt="Saídas" />
        </header>
        <strong> 
         - {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)} 
        </strong>
      </div>

      <div>
        <header>
          <small> Total </small>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong> 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}  
        </strong>
      </div>
    </Container>
  )
}
