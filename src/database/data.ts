import  dotenv from "dotenv"
import  mongodb from "mongodb"

dotenv.config()

export const mongoDBConnection = mongodb.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if(error) throw error;
        console.log("DB Connected");
        
        const database = client.db()
        const collection = database.collection("users");

        let dataFromMongo = await collection.find().toArray(); 
        console.log(dataFromMongo);
        
    }
);
