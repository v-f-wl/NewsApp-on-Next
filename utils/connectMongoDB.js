import mongoose from 'mongoose'

const connectDB= async () => mongoose
.connect(process.env.DB_KEY)
.then(() => console.log('DB Okay'))
.catch(() => console.log('Dont Connect'))

export default connectDB

