export interface ResponseWrapperV1<T = any> {
    code: number;
    message: string;
    result: T
}

export interface ResponseWrapperV2<T = any> {
    code: number;
    msg: string;
    result: T
}

export class Result<T> {
    public list: T[] = Array<T>();
    public total: number;

    constructor() {
        this.list = Array<T>();
        this.total = 0;
    }
}