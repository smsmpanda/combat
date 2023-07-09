import { ApiUri as urls } from "@/common/api-uri";
import { service2 } from '@/common/https'

export interface FoodResponse<T> {
    code: string
    result: T
    msg: string
}

export class FoodHeat {
    name: string
    img: string
    desc: string
    heat: string
}

export async function getSeachFoodheatAsnyc(searchKey: string): Promise<FoodResponse<Array<FoodHeat>>> {
    try {
        const response = await service2.get<FoodResponse<Array<FoodHeat>>>(urls.getSeachFoodheat, {
            params: {
                keyword: searchKey,
                page: 1
            }
        })
        return response.data
    } catch (error) {
        return null
    }
}