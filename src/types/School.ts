import { IConnection } from "./Connection"
import { ICareer } from "./Career"

export interface ISchool {
  name?: string
  careersConnection?: IConnection<ICareer>
}
