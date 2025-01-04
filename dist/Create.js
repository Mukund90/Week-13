"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create_Schema = void 0;
const index_1 = require("./index");
const Create_Schema = async () => {
    try {
        const client = await (0, index_1.Getconnect)();
        const Query = `CREATE TABLE USERS(
           id SERIAL PRIMARY KEY,
           users_name VARCHAR(255) NOT NULL,
           email VARCHAR(100) UNIQUE NOT NULL,
           password VARCHAR(255)  NOT NULL
             )`;
        if (!client) {
            throw new Error('Failed to Eastablished connection with database!');
        }
        const value = await client.query(Query);
        console.log('Schemas Created sucessfully!' + JSON.stringify(value));
        const Query2 = `CREATE TABLE Bank_details(
            bank_id SERIAL PRIMARY KEY ,
            user_id INTEGER,
            Account_type VARCHAR(255) NOT NULL ,
            Balance DECIMAL(10,2) NOT NULL ,
            FOREIGN KEY(user_id) REFERENCES USERS(id) ON DELETE CASCADE
            )`;
        const value2 = await client.query(Query2);
        console.log('Schemas Created sucessfully!' + JSON.stringify(value2));
    }
    catch (err) {
        console.log(`something went wrong while creating table` + err);
    }
};
exports.Create_Schema = Create_Schema;
