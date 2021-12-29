export interface IUserAuthRequest {
    username: string;
    password: string;
}
export interface IuserAuthResponse{
    authToken: boolean;
    username: string;
    password: string;
}
export interface ITokenResponse{
    success: boolean;
    token: string
}
export interface IProduct{
 id: number;
 title: string;
 image: string;
text: string;
}
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