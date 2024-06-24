export interface ICalendarEvent {
  title?: string
  isAllDay?: boolean
  durationHours?: number
  startDateUtc?: Date
  endDateUtc?: Date
  rrule?: string
  exceptionsDatesUtc?: any // TODO: Better typing
  toggled?: boolean
}
