module.exports = {
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ['images.unsplash.com', 'images.pexels.com'],
    },
    envs: {
      TELEGRAM_BOT_TOKEN: process.env.BOT_TOKEN,
    }
  }