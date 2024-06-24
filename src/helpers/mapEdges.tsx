import { IEdge } from "../types/Connection"

export const mapEdges = <T extends unknown>(edges: IEdge<T>[]): T[] => {
  return edges?.map((edge) => edge?.node)
}
