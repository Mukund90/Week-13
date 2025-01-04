"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert_query = void 0;
const index_1 = require("./index");
const Insert_query = async () => {
    try {
        const client = await (0, index_1.Getconnect)();
        if (!client) {
            throw new Error('kuch to wrong huea haii!');
        }
        const value = `INSERT INTO USERS (users_name,email,password) values($1,$2,$3) RETURNING *`;
        const queryu = [['Mukund jha', 'jhamukund987@gmail.com', 'mypassword'],
            ['Mohan', 'mohan78@gmail.com', 'myhashedpassword2']
        ];
        for (let i = 0; i < queryu.length; i++) {
            const result = await client.query(value, queryu[i]);
            console.log('inserted sucessfully!' + JSON.stringify(result.rows));
        }
        const value1 = `INSERT INTO bank_details(user_id, account_type, balance) 
     SELECT $1, $2, $3 
     WHERE EXISTS (SELECT 1 FROM USERS WHERE id = $1) 
     RETURNING *`;
        const data = [[9, 'Saving Account', 15890.78],
            [10, 'Current Account', 20000.89]];
        for (let i = 0; i < data.length; i++) {
            const bucket = await client.query(value1, data[i]);
            console.log('inserted data sucessfully!' + JSON.stringify(bucket.rows));
        }
    }
    catch (err) {
        console.log("something went wrong hey users!" + err);
    }
};
exports.Insert_query = Insert_query;
(0, exports.Insert_query)();
