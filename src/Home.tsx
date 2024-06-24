import * as React from "react"
import styled from "styled-components"

import { Logo } from "./components/Logo"

class Home extends React.Component {
  render() {
    return (
      <Main>
        <h2>
          <Logo height={112} />
        </h2>
        <h3>Follow your school classes</h3>
      </Main>
    )
  }
}

export default Home

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h2,
  h3 {
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.75rem;
  }
`
