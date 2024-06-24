import * as React from "react"
import styled from "styled-components"
// import { Link } from "react-router"

// Hooks
import { useSchoolCalendar } from "../pages/CalendarPage/SchoolCalendarContext"

// Components
import { CalendarTitle } from "./CalendarTitle"
import { Logo } from "./Logo"
import { VerticalAccordion } from "./VerticalAccordion"
import { ItemToggle } from "./ItemToggle"

// Types
import { ICareer } from "../types/Career"
import { ISubject } from "../types/Subject"

// Helpers
import { deepClone } from "../helpers/deepClone"
import { mapEdges } from "../helpers/mapEdges"

export const CalendarSidebar: React.FC = () => {
  const { careers, school, setSchool } = useSchoolCalendar()

  const toggleSubject = (careerIndex: number, subjectIndex: number) => {
    const updatedSchool = deepClone(school)
    const updatedCareerEdges = updatedSchool?.careersConnection?.edges
    const updatedSubjectEdges =
      updatedCareerEdges[careerIndex]?.node?.subjectsConnection?.edges
    const updatedSubject = updatedSubjectEdges[subjectIndex]?.node
    updatedSubject.toggled = !updatedSubject?.toggled

    setSchool(updatedSchool)
  }

  return (
    <SidebarWrapper>
      <Logo height={70} />
      <CalendarTitle title={school?.name} />
      {careers?.map((career, cIndex) => {
        const { name, subjectsConnection }: ICareer = career
        const subjects: ISubject[] = mapEdges(subjectsConnection?.edges)

        return (
          <VerticalAccordion title={name}>
            {subjects?.map((subject, sIndex) => (
              <ItemToggle
                text={subject.name}
                toggled={subject.toggled}
                setToggled={() => {
                  toggleSubject(cIndex, sIndex)
                }}
              />
            ))}
          </VerticalAccordion>
        )
      })}
    </SidebarWrapper>
  )
}

// Styled components

const SidebarWrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  grid-row: span 2;
  padding: 25px 10px;
`
