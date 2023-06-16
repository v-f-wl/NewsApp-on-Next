import connectDB from "../../../utils/connectMongoDB";
import UserModal from "../../../models/User";
import PostsModal from "../../../models/Post";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  connectDB();
  if (req.method === "PATCH") {
    try {
      const { id } = req.query
      const { nameValue } = req.body

      if (!id || !nameValue) {
        return res.status(400).json({
          message: "Недостаточно данных для обновления",
        })
      }

      const updatedUser = await UserModal.findOneAndUpdate(
        { _id: id },
        { $set: { fullName: nameValue } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "Пользователь не найден",
        });
      }

      PostsModal.updateMany(
        { user: id }, 
        { $set: { name: nameValue } } 
      )
        .then(updatedPost => {
          if (!updatedPost) {
            return res.status(404).json({
              message: "Пост не найден",
            });
          }
          res.json({
            user: updatedUser,
            post: updatedPost,
          })
        })
        .catch(error => {
          res.status(500).json({
            message: "Произошла ошибка при обновлении поста",
            error: error
          })
        })
    } catch (error) {
      res.status(500).json({
        message: "Произошла ошибка при обновлении пользователя",
        error: error
      })
    }
  } else {
    res.status(400).json({
      message: "Метод не разрешен",
    })
  }
}