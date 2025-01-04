import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;

export const Getconnect = async () => {
   console.log('POSTGRES_URL:', process.env.POSTGRES_URL);  

   const client = new Client({
      connectionString: process.env.POSTGRES_URL
   });

   try {
      await client.connect();
      console.log('Database connected successfully!');
      return client;
   } catch (err) {
      console.log('Something went wrong!', err);
   }
}

Getconnect();
