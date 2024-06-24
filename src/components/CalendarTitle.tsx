import * as React from "react"
import styled from "styled-components"

interface ICalendarTitleProps {
  title: string
}

export const CalendarTitle: React.FC<ICalendarTitleProps> = (props) => {
  const { title } = props

  return (
    <CalendarTitleWrapper>
      <AvatarImage />
      <h3>{title}</h3>
    </CalendarTitleWrapper>
  )
}

// Styled components

const CalendarTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
`

const AvatarImage = styled.div`
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  flex-basis: 70px;
  flex-shrink: 0;
  height: 70px;
  margin-right: 15px;
`
