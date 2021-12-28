export interface IUserAuthRequest {
    username: string;
    password: string;
}
export interface IuserAuthResponse{
    authToken: boolean;
    username: string;
    password: string;
}