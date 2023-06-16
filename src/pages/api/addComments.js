import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB()
    try {
      const postId = req.query.id
      const value = req.body
      const updatedPost = await PostModel.findById(postId)

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: 'Статья не найдена',
        })
      }

      const { comments } = updatedPost
      comments.push(value)
      updatedPost.markModified('comments')

      await updatedPost.save()

      res.json({
        updatedPost,
      })
    } catch (error) {
      res.status(500).json({
        message: 'Не удалось обновить статью',
        error: error
      });
    }
  }
}