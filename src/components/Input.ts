import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 0.25rem;
  background: #E7E9EE;
  border: 1px solid #D7D7D7;
  outline: 0;
  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + & {
    margin-top: 1rem;
  }
`;