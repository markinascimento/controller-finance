import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';
import { App } from './components/App'

createServer({
  // -> Simulando a criação de uma tabela no BD
  models: {
    transaction: Model,
  },

  // -> Retornando os dados do BD Fake
  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'Desenvolvimento de website',
  //         type: 'deposit',
  //         category: 'Dev',
  //         amount: 789,
  //         createdAt: new Date('2021-02-12 09:0:00')
  //       },
  //       {
  //         id: 2,
  //         title: 'Mercado',
  //         type: 'withdraw',
  //         category: 'Compras',
  //         amount: 789,
  //         createdAt: new Date('2021-02-12 11:0:00')
  //       },
  //     ],
  //   });
  // },

  // -> Criando as rotas para a requisição
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
