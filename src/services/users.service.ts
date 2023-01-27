import { IUserSignup } from "../interfaces/users.interface";
import { User } from "../models/users.model";

export const getUsers = async () => {
    try {
        const users = await User.findAll();
        const usersJSON = JSON.stringify(users, null, 2);
        return JSON.parse(usersJSON);
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getUser = async (userId: number) => {
    try {
        const user = await User.findOne({ where: { id: userId }});
        const userJSON = JSON.stringify(user, null, 2);
        return JSON.parse(userJSON);
    } catch (error: any) {
        throw new Error(error);
    }
}

export const createUser = async (user: IUserSignup) => {
    try {
        const newUser = await User.create({...user, first_name: user.firstName, last_name: user.lastName });
        const newUserJSON = JSON.stringify(newUser, null, 2);
        return JSON.parse(newUserJSON);
    } catch (error: any) {
        throw new Error(error);
    }
}

export const updateUser = async (userId: number, user: IUserSignup) => {
    try {
        const updatedUser = await User.update({...user, first_name: user.firstName, last_name: user.lastName }, { where: { id: userId } });
        const updatedUserJSON = JSON.stringify(updatedUser, null, 2);
        return JSON.parse(updatedUserJSON);
    } catch (error: any) {
        throw new Error(error);
    }
}

export const removeUser = async (userId: number) => {
    try {
        const deletedUser = await User.destroy({ where: { id: userId } });
        const deletedUserJSON = JSON.stringify(deletedUser, null, 2);
        return JSON.parse(deletedUserJSON);
    } catch (error: any) {
        throw new Error(error);
    }
}
