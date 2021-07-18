const devPresets = ['@vue/babel-preset-app']
const buildPresets = [
  [
    '@vue/cli-plugin-babel/preset',
    {
      useBuiltIns: false
    }
  ]
]

module.exports = {
  presets: (process.env.NODE_ENV === 'development' ? devPresets : buildPresets)
}

// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
