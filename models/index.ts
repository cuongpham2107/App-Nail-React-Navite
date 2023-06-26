//Category model

export interface CategoryModel{
    id: string
    collectionId: string
    collectionName : string
    name: string
    description: string

}

//Shop model

export interface ShopModel{
    id: string
    name: string 
    collectionId: string
    collectionName : string
    description: string
    address: string
    phone: string
    rating: string
    status: string
    image: string
    lat: number
    long: number
    body: string
    category_id: string
    count_rating: string
    time_start: Date
    time_end: Date
    services: string[]
    expand:  {
        services: ServiceModel | null
    }
    

}

export interface ServiceModel{
    [x: string]: any
    id: string
    collectionId:  string | null
    collectionName : string | null
    name: string | null
    description: string | null
    body: string | null
    price: number | null
    time: number | null
    rating: number | null
    image: string | null
    service_category: string | null
}

export interface ServiceCategoryModel{
    id: string
    collectionId: string
    collectionName : string
    name: string
    description: string
}

export interface ScheduleModel{
    id: string|null
    shop: ShopModel 
    service: ServiceModel
    time: Date
    user: UserModel
    status: boolean
    price_sale: number
    total_price: number
}
export type UserModel = {
    id:string ,
    collectionId: string
    collectionName : string
    name: string,
    phone:string | null,
    email:string,
    date: string | null,
    avatar: string | null
}
