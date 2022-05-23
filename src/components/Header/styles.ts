import styled from 'styled-components';

export const Container = styled.header`
  height: 12rem;
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;

  button {
    height: 3rem;
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.5rem;
    transition: filter .2s ease-in-out;
    
    &:hover{
      filter: brightness(0.7);
    }
  }
`;