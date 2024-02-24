export interface CategoryComponents {
    result: Result
    status: number
  }
  
  export interface Result {
    result: category[]
  }
  
  export interface category {
    components: Component[]
    id: number
    image: string
    slug: string
    subtitle: string
    title: string
    updated_at: string
  }
  
  export interface Component {
    id: number
    image: string
    slug: string
    subtitle: string
    title: string
    updated_at: string
  }
  