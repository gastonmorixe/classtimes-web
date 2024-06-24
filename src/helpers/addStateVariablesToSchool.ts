// Helpers
import { deepClone } from "./deepClone"

// Types
import { ISchool } from "../types/School"

export const addStateVariablesToSchool = (schoolRawData: ISchool): ISchool => {
  const updatedSchool = deepClone(schoolRawData)

  if (updatedSchool?.careersConnection) {
    for (let careerEdge of updatedSchool.careersConnection?.edges) {
      if (careerEdge.node?.subjectsConnection) {
        for (let subjectEdge of careerEdge.node.subjectsConnection.edges) {
          subjectEdge.node.toggled = true
        }
      }
    }
  }

  return updatedSchool
}
