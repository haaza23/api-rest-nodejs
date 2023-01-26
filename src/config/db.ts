import { Pool } from 'pg';
import config from './config';

const pool = new Pool(config.db);

/**
 * @param {*} query 
 * @param {*} params 
 */
export async function query(query: string, params: any) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}
