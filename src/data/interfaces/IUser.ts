export interface IUser{
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    passwordHash: string,
    rating: number,
    creationDate: Date,
}