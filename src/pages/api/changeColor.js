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
      const { id } = req.query; // Получаем ID пользователя из запроса
      const { colorCode } = req.body; // Получаем код цвета из тела запроса

      // Проверяем, что идентификатор пользователя и код цвета были переданы
      if (!id || !colorCode) {
        return res.status(400).json({
          message: "Недостаточно данных для обновления",
        });
      }

      // Обновляем поле "avatar" в модели "User"
      const updatedUser = await UserModal.findOneAndUpdate(
        { _id: id },
        { $set: { avatar: colorCode } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "Пользователь не найден",
        });
      }

      PostsModal.updateMany(
        { user: id }, // Условие выбора постов для обновления
        { $set: { color: colorCode } } // Обновляем поле "color" для каждого поста
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
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            message: "Произошла ошибка при обновлении поста",
          });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Произошла ошибка при обновлении пользователя",
      });
    }
  } else {
    res.status(400).json({
      message: "Метод не разрешен",
    });
  }
}