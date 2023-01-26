export interface UserSignUpInterface {
    username: string;

    password: string;

    email: string;

    firstName: string;

    lastName: string;
}

export interface UserLoginInterface {
    username: string;

    password: string;
}

export interface UserInterface {
    user: UserSignUpInterface;

    refreshToken: string;
}
