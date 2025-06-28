import {Client} from "pg";
const pgClient=new Client('postgresql://neondb_owner:npg_X3Z8mAhDJHSb@ep-purple-thunder-a1pvkty6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')
const pgClient2=new Client({
    user:"neondb_owner",
    password:"npg_X3Z8mAhDJHSb",
    port:5432,
    host:"ep-purple-thunder-a1pvkty6-pooler.ap-southeast-1.aws.neon.tech",
    database:"neondb"
})
async function main() {
      await pgClient.connect();
      const response=await pgClient.query("SELECT * FROM users;")
      console.log(response)
}
main();