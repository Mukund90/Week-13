"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const Get_query = async (id, user_id) => {
    try {
        const client = await (0, index_1.Getconnect)();
        if (!client) {
            throw Error('something went wrong!');
        }
        const queryi = `SELECT * FROM USERS WHERE id = $1 `;
        const users_id = [id];
        if (queryi.length > 0) {
            const getting_query = await (client === null || client === void 0 ? void 0 : client.query(queryi, users_id));
            console.log(JSON.stringify(getting_query.rows[0]));
        }
        else {
            console.log('NO users found!');
            return null;
        }
        const query2 = `SELECT * FROM bank_details where user_id = $1`;
        const user_id1 = [user_id];
        if (query2.length > 0) {
            const query_holding = await client.query(query2, user_id1);
            console.log(JSON.stringify(query_holding.rows[0]));
        }
        else {
            console.log('No data is present here!');
        }
    }
    catch (err) {
        console.log('something went wrong' + err);
    }
};
Get_query(9, 9); //function call here!
