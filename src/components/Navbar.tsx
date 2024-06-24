import * as React from "react"
import styled from "styled-components"

// Components
import { Button } from "../components/Button"

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Button href="#">Registrarse</Button>
      <Button href="#">Ingresar</Button>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  background-color: #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
`
