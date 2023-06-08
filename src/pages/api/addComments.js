import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB();
    try {
      const postId = req.query.id; // Используйте req.query.id для получения параметра id из URL// Получите userId из тела запроса
      const value = req.body
      const updatedPost = await PostModel.findById(postId);

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: 'Статья не найдена',
        });
      }

      const { comments } = updatedPost;
      comments.push(value);
      updatedPost.markModified('comments'); // Помечаем likesUser как модифицированное поле

      await updatedPost.save(); // Сохраняем обновленную статью

      res.json({
        updatedPost,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Не удалось обновить статью',
      });
    }
  }
}