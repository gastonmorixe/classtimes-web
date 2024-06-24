export interface IEdge<NodeType> {
  node?: NodeType
  cursor?: string
}

interface IPageInfo {
  hasNextPage?: boolean
  endCursor?: string
}

export interface IConnection<NodeType> {
  edges?: IEdge<NodeType>[]
  pageInfo?: IPageInfo
  totalCount?: number
}
