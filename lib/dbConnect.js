import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
    throw new Error (
        'Este erro ocorreu porque você esqueceu de definir a varíavel MONGODB_URI em env.local, basta criar o arquivo env.local dentro de "sistema-escolar", ex: MONGODB_URI = "mongodb://localhost:27017/teste" '
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {conn: null,promise: null}
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        
        cached.promise = mongoose.connect(MONGODB_URI,opts).then((mongoose)=>{
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    return cached.conn
}

export default dbConnect;