import express from "express"
import cors from "cors"


const app = express();
app.use(cors())
const PORT = process.env.PORT || 4000


async function startServer(){
    try{
        app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))



    }catch(error){
        console.error("Failed to connect to server");

        process.exit(1);
    }
}

startServer();