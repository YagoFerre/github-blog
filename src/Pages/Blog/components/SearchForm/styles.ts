import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const InputContent = styled.div`
  gap: 1rem;

  input {
    flex: 1;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    padding: 1rem;
    color: ${(props) => props.theme['base-text']};

    :focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;

    cursor: pointer;

    &:hover {
      background: #3482d1;
      transition: background-color 0.2s;
    }
  }
`
