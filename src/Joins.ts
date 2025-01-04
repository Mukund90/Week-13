import { Getconnect } from './index';
const Understanding_joins = async(balance:number)=>
{
    try{
        const client = await Getconnect();
        const query = `SELECT * FROM USERS u 
        INNER JOIN bank_details d ON u.id = d.user_id
        WHERE d.balance > $1 `;

        const extra_data = [balance]

        if(!client)
            throw Error ('connection not established!')
        else{
            const value = await client.query(query,extra_data);
            const Formatted_data = value.rows.map((items)=>
            {
              return {
                id: items.user_id,
                users_name: items.users_name,
                email: items.email,
                password: items.password,
                bank_details: {
                    bank_id: items.bank_id,
                    user_id:items.bank_user_id,
                    account_type: items.account_type,
                    balance: items.balance
                }
              }
            })


            console.log(JSON.stringify(Formatted_data, null, 2)); 

        }
    }catch(err)
    {
      console.log('something went wrong'+ err)
    }
}

Understanding_joins(20.7865);//passing arguments as salary 