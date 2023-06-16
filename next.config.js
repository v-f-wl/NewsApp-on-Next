/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  }
}
const withImages = require('next-images');

module.exports = nextConfig
