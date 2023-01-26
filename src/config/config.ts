import 'dotenv/config'

const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
  },
};

export default config;
