
export interface IPostReview{
    rate: number;
    text: string;
}
export interface IPostReviewResponse {
    review_id: number;
} 
export interface IReview {
    created_at: string;
    created_by: {
        email: string;
        first_name: string;
        id: 1;
        last_name: string;
        username: "user";
    }
    id: number;
    rate: number;
    text: string;
}