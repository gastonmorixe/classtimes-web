import * as React from "react"
import styled from "styled-components"

interface IItemToggleProps {
  text: string
  toggled: boolean
  setToggled: () => void
}

export const ItemToggle: React.FC<IItemToggleProps> = (props) => {
  const { text, toggled, setToggled } = props

  return (
    <ToggleWrapper
      onClick={() => {
        setToggled()
      }}
    >
      <Checkbox {...{ toggled }} />
      <Text>{text}</Text>
    </ToggleWrapper>
  )
}

// Local components

interface ICheckboxProps {
  toggled: boolean
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { toggled } = props
  return (
    <CheckboxWrapper toggled={toggled}>
      {toggled ? <CheckboxMarker /> : null}
    </CheckboxWrapper>
  )
}

// Styled Components

const ToggleWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const Text = styled.p`
  text-align: right;
`

interface ICheckboxWrapperProps {
  toggled: boolean
}

const CheckboxWrapper = styled.div<ICheckboxWrapperProps>`
  align-items: center;
  background-color: #CCC;
  /* background-color: ${(props) => (props.toggled ? "#222" : "#CCC")}; */
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.toggled ? "inset 0 0 0 2px #222" : undefined};
  display: flex;
  flex-basis: 20px;
  flex-shrink: 0;
  justify-content: center;
  height: 20px;
`

const CheckboxMarker = styled.div`
  background-color: #222;
  border-radius: 2px;
  height: 12px;
  width: 12px;
`
