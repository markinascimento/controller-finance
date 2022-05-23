// -> Import do ReactJs
import { useState } from 'react';

// -> Import do CSS
import { Container, Content } from './styles';

// -> Import da Logo
import logoImg from '../../assets/logo.svg';

// -> Import das tipagens do component
import { HeaderProps } from '../../interfaces/HeaderProps';

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
