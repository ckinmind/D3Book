const apis = [
  { title: '层次布局', path: '/api/d3-hierarchy'},
]

const subjects = [
  { title: '属性分类专题', path: '/subjects/classify'},
  { title: '渐变填充专题', path: '/subjects/gradient'},
  { title: '材质填充专题', path: '/subjects/pattern'},
  { title: '动画定时属性', path: '/bar', matchPath: /^\/bar/ },
]

docute.init({
  landing: 'landing.html',
  // announcement(route) {
  //   const info = { type: 'warning' }
  //   info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-warning" href="https://github.com/egoist/donate" target="_blank">注意!</a> 图表还处于开发阶段，所以文档还在剧烈变动阶段.'
  //   return info
  // },
  debug: true,
  // home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
  repo: 'ckinmind/SvgBook',
  tocVisibleDepth: 4,
  nav: {
    default: [
      {title: '主页', path: '/home'},
      {title: '类目', path: '/api', type: 'dropdown', items: apis},
      {title: '专题', path: '/attribute', type: 'dropdown', items: subjects},
    ]
  },
  plugins: [
    docuteIframe(),
    docsearch({
      apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
      indexName: 'docute',
      // tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
      tags: ['changelog', 'chart'],
      url: 'https://docute.js.org'
    }),
    evanyou()
  ]
})
