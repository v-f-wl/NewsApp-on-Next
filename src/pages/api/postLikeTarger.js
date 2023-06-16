import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    await connectDB();
    try {
      const postId = req.query.id
      const { userId } = req.body
      const updatedPost = await PostModel.findById(postId)

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: 'Статья не найдена',
        });
      }

      const { likesUser } = updatedPost;

      const userIndex = likesUser.indexOf(userId)

      if (userIndex === -1) {
        likesUser.push(userId);
      } else {
        likesUser.splice(userIndex, 1);
      }

      updatedPost.likesCount = likesUser.length
      updatedPost.markModified('likesUser')

      await updatedPost.save()

      res.json({
        success: true,
        updatedPost,
      })
    } catch (error) {
      res.status(500).json({
        message: 'Не удалось обновить статью',
        error: error
      })
    }
  }
}