const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/lightspeedTA/',
  transpileDependencies: [
    'vuetify'
  ]
})
