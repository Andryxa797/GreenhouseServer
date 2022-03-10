export const BaseApiURL = "http://127.0.0.1:8000"

export  interface IPaginationResponse{
    count: number;
    next: string | null;
    previous: string | null;
}