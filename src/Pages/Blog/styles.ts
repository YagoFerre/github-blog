import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 1.5rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
`
