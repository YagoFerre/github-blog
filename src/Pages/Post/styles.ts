import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 0;
`
export const ContentPost = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem;

  p {
    font-size: 1rem;
    line-height: 1.563rem;
  }

  h3 {
    color: ${(props) => props.theme.blue};
    margin-top: 1rem;
  }
`
