const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Vue Mapbox',
  assetsDir: path.join(__dirname, 'public'),
  components: 'src/components/**/*.vue',
  require: [path.join(__dirname, 'styleguide.global.js')],
  skipComponentsWithoutExample: false,
  pagePerSection: true,
  usageMode: 'expand',
  updateDocs (docs) {
    // console.log(docs)
    // if (docs.doclets.version) {
    //   const versionFilePath = path.resolve(
    //     path.dirname(file),
    //     docs.doclets.version
    //   )
    //   const version = require(versionFilePath).version

    //   docs.doclets.version = version
    //   docs.tags.version[0].description = version
    // }

    return docs
  },

  getExampleFilename (componentPath) {
    const name = path.basename(componentPath, '.vue')
    const pathFinal = path.join(__dirname, 'docs', name + '.md')
    console.log(pathFinal)
    return pathFinal
    // const dir = path.dirname(componentPath)
    // return componentPath.replace(/\.jsx?$/, '.examples.md')
  },

  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.vue')
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}';`
  },
  // exampleMode: 'expand',
  // defaultExample: true,

  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      sectionDepth: 1
    },
    {
      name: 'Base Components',
      sectionDepth: 1,
      components: [
        'src/components/VueMapbox.vue',
        'src/components/VmMarker.vue',
        'src/components/VmPopup.vue',
        'src/components/VmSource.vue',
        'src/components/VmImage.vue',
        'src/components/VmLayer.vue'
      ]
    },
    {
      name: 'Custom Markers',
      sectionDepth: 1,
      components:[
        'src/components/Markers/VmMarkerDonut.vue'
      ]
    },
    {
      name: 'Custom Sources',
      sectionDepth: 1,
      components: [
        'src/components/Source/vmSourceGeoJson.vue'
      ]
    },
    { name: 'Other components', sectionDepth: 1, components: 'src/components/VmPopup.vue' }
  ]

  // webpackConfig: {
  //   // custom config goes here
  // },
  // exampleMode: 'section'
}
