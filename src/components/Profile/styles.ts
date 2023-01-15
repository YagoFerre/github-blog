import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 0;

  margin-top: -7rem;
`

export const ProfileCard = styled.div`
  max-width: 864px;
  margin: 0 auto;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 10px;
  }
`

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme['base-title']};
    }

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

  p {
    margin: 0.5rem 0 1.5rem;
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

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
