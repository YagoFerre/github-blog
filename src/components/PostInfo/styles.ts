import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 0;

  margin-top: -7rem;
`

export const PostInfoCard = styled.div`
  max-width: 864px;
  margin: 0 auto;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    margin: 1.25rem 0 0.5rem;
  }
`

export const PostInfoContent = styled.div`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-title']};

    a {
      align-items: center;
      display: flex;

      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
      gap: 0.5rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-label']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
