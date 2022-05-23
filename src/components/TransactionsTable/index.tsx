// -> Import do ReactJS
import { useContext } from 'react';

// -> Import da Context API
import { useTransactions } from '../../hooks/useTransactions';

// -> Import do CSS
import { Container } from './styles';

// -> Criando as tipagens
import { TransactionsType } from '../../interfaces/TransactionType';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th> Título </th>
            <th> Valor </th>
            <th> Categoria </th>
            <th> Data </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item: TransactionsType) => (
            <tr key={item.id}>
              <td> {item.title} </td>
              <td className={item.type}> 
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.amount)} 
              </td>
              <td> {item.category} </td>
              <td> 
                {new Intl.DateTimeFormat('USD').format(
                  new Date(item.createdAt)
                )} 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
