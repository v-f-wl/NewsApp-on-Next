import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if(req.method === 'PATCH'){
    await connectDB()

    try {
      const { postId, editedText } = req.body;
      const post = await PostModel.findById(postId);

      if (!post) {
        return res.status(404).json({ message: 'Пост не найден' });
      }
      post.text = editedText;
      const updatedPost = await post.save();
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Произошла ошибка при редактировании поста' });
    }

  }
}