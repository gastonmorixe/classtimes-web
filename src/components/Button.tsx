import styled from "styled-components"

export const Button = styled.a`
  border-radius: 5px;
  color: var(--primary-blue);
  cursor: pointer;
  margin: 5px;
  padding: 12px;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: inset 0 0 0 2px var(--primary-blue),
      0 1px 4px 0 var(--primary-blue-transparent);
  }
`
