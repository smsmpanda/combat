const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    create: {
      entry: 'src/create/main.ts',
      template: 'public/create.html',
      filename: 'create.html'
    },
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html'
    }
  }
})
