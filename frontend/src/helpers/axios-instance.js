import axios from 'axios';

const isProd = process.env.NODE_ENV.includes('production');
const server = isProd ? "localhost" : "localhost:3001"

export const apiGateway = axios.create({
    baseURL: `http://${server}/api`
});
