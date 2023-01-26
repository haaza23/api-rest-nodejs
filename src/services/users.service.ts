import { UserSignUpInterface } from "../interfaces/users.interface";
import { query } from '../config/db';

export const create = async (user: UserSignUpInterface) => {
    try {
        // const newUser = await User.create(user);
        // return newUser;
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getOneByUsername = async (username: string) => {
    try {
        const user = await query('SELECT * FROM users WHERE username = $1', [username]);
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}
