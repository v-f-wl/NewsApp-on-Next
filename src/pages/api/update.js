import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  
  connectDB();
  if (req.method === 'POST') {
    try {
      // Обновить документы в коллекции "posts"
      const updateResult = await PostModel.updateMany(
        {},
        { $set: { comments: [] } }
      );
      console.log(updateResult)
      res.status(200).json({
        message: `Поле "comments" успешно добавлено в ${updateResult.modifiedCount} пост(ы)`,
      });
    } catch (error) {
      console.error('Произошла ошибка при обновлении постов:', error);
    }
  }
}