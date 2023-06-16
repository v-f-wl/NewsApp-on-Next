import connectDB from "../../../utils/connectMongoDB";
import UserModal from "../../../models/User";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  connectDB();
  if (req.method === "PATCH") {
    try {
      const { id } = req.query
      const { city, age,hobbies } = req.body
      if (!id) {
        return res.status(400).json({
          message: "Недостаточно данных для обновления",
        })
      }

      const updatedUser = await UserModal.findOneAndUpdate(
        { _id: id },
        { $set: { city: city, age: age, hobbies: hobbies} 
        },
        { new: true }
      )

      if (!updatedUser) {
        return res.status(404).json({
          message: "Пользователь не найден",
        })
      }

      res.json({message : 'success'})
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