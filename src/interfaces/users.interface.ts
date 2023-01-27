export interface IUserSignup {
    username: string;

    password: string;

    email: string;

    firstName: string;

    lastName: string;
}

export interface IUserLogin {
    username: string;

    password: string;
}

export interface UserInterface {
    user: IUserSignup;

    refreshToken: string;
}
