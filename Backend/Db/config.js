import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const { PORT, HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, JWT_SECRET } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

const config = {
    port: PORT,
    host: HOST,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    },
    jwtSecret: JWT_SECRET
};

export default config;