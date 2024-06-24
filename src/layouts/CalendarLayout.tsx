import * as React from "react"
import styled from "styled-components"

// Components
import { Navbar } from "../components/Navbar"
import { CalendarSidebar } from "../components/CalendarSidebar"

interface ICalendarLayoutProps {
  children: JSX.Element[] | JSX.Element
}

export const CalendarLayout: React.FC<ICalendarLayoutProps> = (props) => {
  const { children } = props

  return (
    <LayoutWrapper>
      <CalendarSidebar />
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: var(--navbar-height) auto;
`
