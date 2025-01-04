"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Getconnect = void 0;
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load .env file
dotenv_1.default.config();
const { Client } = pg_1.default;
const Getconnect = async () => {
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL); // Debugging line
    const client = new Client({
        connectionString: process.env.POSTGRES_URL // Use uppercase
    });
    try {
        await client.connect();
        console.log('Database connected successfully!');
        return client;
    }
    catch (err) {
        console.log('Something went wrong!', err);
    }
};
exports.Getconnect = Getconnect;
(0, exports.Getconnect)();
