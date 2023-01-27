import { Sequelize } from 'sequelize';
import 'dotenv/config'

const env = process.env;

const sequelize = new Sequelize(`postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)

export default sequelize;
