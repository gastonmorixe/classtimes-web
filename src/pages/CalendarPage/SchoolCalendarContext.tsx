import * as React from "react"

// Types
import { ICalendarEvent } from "../../types/CalendarEvent"
import { ICareer } from "../../types/Career"
import { ISchool } from "../../types/School"
interface IDefaultValue {
  calendarEvents?: ICalendarEvent[]
  careers?: ICareer[]
  school?: ISchool
  setSchool?: React.Dispatch<ISchool>
}

const defaultValue: IDefaultValue = {
  calendarEvents: undefined,
  careers: undefined,
  school: undefined,
  setSchool: undefined,
}

export const SchoolCalendarContext = React.createContext(defaultValue)
export const useSchoolCalendar = () => {
  return React.useContext(SchoolCalendarContext)
}
