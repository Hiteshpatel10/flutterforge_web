export interface Blogs {
    data: Data
  }
  
  export interface Data {
    publication: Publication
  }
  
  export interface Publication {
    id: string
    title: string
    posts: Posts
  }
  
  export interface Posts {
    edges: Edge[]
    pageInfo: PageInfo
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    title: string
    brief: string
    url: string
    updatedAt?: string
    coverImage?: CoverImage
  }
  
  export interface CoverImage {
    url: string
  }
  
  export interface PageInfo {
    endCursor: string
    hasNextPage: boolean
  }
  