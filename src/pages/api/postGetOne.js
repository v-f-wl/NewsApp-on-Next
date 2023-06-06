import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  connectDB()
  //get
  try {
    const { id } = req.query
    PostModel.findOneAndUpdate(
    {
      _id: id
    }, 
    {
      $inc: { likesCount: 1}
    }, 
    {
      returnDocument: 'after'
    }
    )
    .then(updatedDocument => {
      if(!updatedDocument){
        return res.status(404).json({
          message: 'Статья не найдена'
        })
      }
      res.json(updatedDocument)
    })
    .catch(error => {
      console.log(error)
      return res.status(404).json({
        message: 'Статья не найдена'
      })
    });
  } catch (error) {
      console.log(error)
      res.status(404).json({
        message: 'Не удалось получить пост'
    })
  }

  return res.status(500).json({
    message: 'что-то пошло не так'
  })
}
// res.status(200).json({ name: 'John efDoe' });