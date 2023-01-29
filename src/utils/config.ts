import { Sequelize } from 'sequelize';
import 'dotenv/config'

const env = process.env;

export const sequelize = new Sequelize(`postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)

export const getEnvVar: (variable: string) => any = (variable: string) => {
    return env[variable];
};
