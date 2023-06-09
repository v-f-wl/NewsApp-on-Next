import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dxzx1bkz1', 
  api_key: "441643216429182", 
  api_secret: "vm-_S0mZGl9gyc3kdZG2-kco_a4",
  secure: true,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const fileStr = req.body.data;
        const uploadedImage = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'dev_setups'
        });
        res.json({
          id: uploadedImage.public_id,
          url: uploadedImage.secure_url
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error uploading image',
      });
    }
  }
}
