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
      const postId = req.query.id; // Используйте req.query.id для получения параметра id из URL
      const { userId } = req.body; // Получите userId из тела запроса
      const updatedPost = await PostModel.findById(postId);

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: 'Статья не найдена',
        });
      }

      const { likesUser } = updatedPost;

      const userIndex = likesUser.indexOf(userId); // Проверяем, присутствует ли userId в массиве likesUser

      if (userIndex === -1) {
        // Если userId не найден, добавляем его в массив
        likesUser.push(userId);
      } else {
        // Если userId найден, удаляем его из массива
        likesUser.splice(userIndex, 1);
      }

      updatedPost.likesCount = likesUser.length; // Обновляем likesCount на основе длины массива likesUser
      updatedPost.markModified('likesUser'); // Помечаем likesUser как модифицированное поле

      await updatedPost.save(); // Сохраняем обновленную статью

      res.json({
        success: true,
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