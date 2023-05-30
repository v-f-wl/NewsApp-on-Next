import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if(req.method === 'GET'){
    await connectDB()
    try{
      const { idPerson } = req.query
      console.log(idPerson)
      const posts = await PostModel.find({ user: idPerson }).exec()
      res.json(posts)
    }catch(error){
      console.log(error)
      res.status(500).json({
        message: error
      })
    }
  }
}