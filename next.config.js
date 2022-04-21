const withImages = require('next-images');

module.exports = 
  withImages ({
  images: {
    domains: ['localhost:3000', 'learn-code.com', 'media.graphcms.com', 'media.graphassets.com']
  },
});
