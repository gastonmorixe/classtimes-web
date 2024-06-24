import * as React from "react"
import { CalendarWithData } from "../../components/Calendar"
import { useParams } from "react-router"
import { useQuery } from "@apollo/client"

// Helpers
import { addStateVariablesToSchool } from "../../helpers/addStateVariablesToSchool"
import { mapEdges } from "../../helpers/mapEdges"

// Layout
import { CalendarLayout } from "../../layouts/CalendarLayout"

// Context
import { SchoolCalendarContext } from "./SchoolCalendarContext"

// Queries
import GET_SCHOOL_QUERY from "./graphql/getSchoolQuery.graphql"

// Types
import { ICalendarEvent } from "../../types/CalendarEvent"
import { ICareer } from "../../types/Career"
import { ISubject } from "../../types/Subject"

export function Page() {
  const { schoolShortName } = useParams()
  const { loading, error, data } = useQuery(GET_SCHOOL_QUERY, {
    variables: { shortName: schoolShortName },
  })

  // TODO: Don't know if it's a good practice to have the entire state in one giant object

  /* Preprocessing step to add state variables to school object */
  const schoolRawData = data?.school
  const schoolInitialValue = addStateVariablesToSchool(schoolRawData)

  /* Set school as state for Context */
  const [school, setSchool] = React.useState(schoolInitialValue)

  /* Set related variables for faster access */
  const careers: ICareer[] = mapEdges(school?.careersConnection?.edges) || []
  let subjects: ISubject[] = []
  for (let career of careers) {
    subjects = subjects.concat(mapEdges(career?.subjectsConnection?.edges))
  }
  let calendarEvents: ICalendarEvent[] = []
  for (let subject of subjects) {
    const mappedEvents = mapEdges(subject?.calendarEventsConnection?.edges)
    for (let event of mappedEvents) {
      event.toggled = subject.toggled
    }
    calendarEvents = calendarEvents.concat(mappedEvents)
  }

  return (
    <div className="App">
      <SchoolCalendarContext.Provider
        value={{ school, setSchool, careers, calendarEvents }}
      >
        <CalendarLayout>
          <CalendarWithData />
        </CalendarLayout>
      </SchoolCalendarContext.Provider>
    </div>
  )
}
