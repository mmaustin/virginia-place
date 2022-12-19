import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 30px;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .events {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .events {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Wrapper
