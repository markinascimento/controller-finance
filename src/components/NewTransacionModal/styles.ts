import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`;

interface RadioBoxPros {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  red: '#E52E4D',
  green: '#33CC95',
};

export const RadioBox = styled.button<RadioBoxPros>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 1px solid #D7D7D7;
  border-radius: 0.25rem;
  background: ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.7, colors[activeColor])
    : 'transparet'
  };
  transition: .2s ease-in-out;

  &:hover {
    border-color: ${darken(0.1, "#D7D7D7")};
  }
    
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-title);
  }
`;