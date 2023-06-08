import connectDB from "../../../utils/connectMongoDB";
import PostsModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try{
      await connectDB()
      const { postId } = req.query
      const post = await PostsModel.findById(postId)
      if(!post){
        return res.status(404).json({
          message: 'Пользователь не найдем'
        })
      }
      const comments = [...post.comments]
      res.json({
        comments
      })
    }catch(error){
      console.log(error)
      res.status(500).json({
        message: 'Нет доступа'
      })
    }
  }
  
}