import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if(req.method === 'GET'){
    try{
      await connectDB()
      const posts = await PostModel.find().exec()
      res.json(posts)
    }catch(error){
      res.status(500).json({
        message: error
      })
    }
  }
}
