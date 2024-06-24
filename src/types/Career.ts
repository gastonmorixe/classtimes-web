import { IConnection } from "./Connection"
import { ISubject } from "./Subject"

export interface ICareer {
  name?: string
  subjectsConnection?: IConnection<ISubject>
}
