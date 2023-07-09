import { ApiUri as urls } from "@/common/api-uri";
import { service2 } from '@/common/https'
import { ResponseWrapperV2 } from '@/common/api-common'

export class Daily {
    public tts: string;
    public content: string;
    public note: string;
    public dateline: string;
    public img: string;
}

export async function getOneDayEnglishAsync(): Promise<ResponseWrapperV2<Daily>> {
    try {
        const response = await service2.get<ResponseWrapperV2<Daily>>(urls.getOnDayEnglish)
        return response.data
    } catch (error) {
        return null
    }
}