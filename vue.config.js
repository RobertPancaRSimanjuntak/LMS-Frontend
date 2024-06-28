const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require('path');
const API_URL = process.env.VUE_APP_API_URL
module.exports = {
  ...require('@vue/cli-service').defineConfig({
    transpileDependencies: true,
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/')
        }
      }
    }
  })
}
