import {Client} from 'pg';
import dotenv from 'dotenv';

dotenv.config;
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});


async function createUsersTable(){
    client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP         
        );
    `)
    console.log(result);
}
async function insertData() {
        try{
        await client.connect();
        const insertQuery = 
            "INSERT INTO users (username, password) VALUES ('username3', 'username3');";
        const res = await client.query(insertQuery);
        console.log("Insertion Successful", res);
    }
    catch(err){
        console.error('Error during insertion', err);
    }
    finally{
        await client.end();
    }
}
insertData();
