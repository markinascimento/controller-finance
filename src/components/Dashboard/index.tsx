// -> Import dos components
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

// -> Import do CSS
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
