import { IConnection } from "./Connection"
import { ICalendarEvent } from "./CalendarEvent"

export interface ISubject {
  _id?: string
  name?: string
  toggled?: boolean
  calendarEventsConnection?: IConnection<ICalendarEvent>
}
