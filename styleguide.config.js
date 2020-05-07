module.exports = {
  // set your styleguidist configuration here
  title: 'Vue Mapbox',
  components: 'src/components/**/[A-Z]*.vue',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  usageMode: 'expand',
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
        'src/components/VmPopup.vue'
      ]
    },
    {
      name: 'Sources',
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
