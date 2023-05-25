import mongoose from 'mongoose'

const connectDB= async () => mongoose
.connect('mongodb+srv://admin:123qweasd@cluster0.liynhak.mongodb.net/blog?retryWrites=true&w=majority')
.then(() => console.log('DB Okay'))
.catch(() => console.log('Dont Connect'))

export default connectDB

