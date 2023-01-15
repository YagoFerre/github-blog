import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  a {
    display: flex;
    flex-direction: column;
    max-width: 416px;
    text-decoration: none;
    background: ${(props) => props.theme['base-post']};
    padding: 1.5rem;
    border-radius: 10px;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      h2 {
        color: ${(props) => props.theme['base-title']};
        font-size: 1.25rem;
        max-width: 283px;
      }

      p {
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
      }
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
    }

    &:hover {
      border: 1px solid ${(props) => props.theme['base-border']};
    }
  }
`
