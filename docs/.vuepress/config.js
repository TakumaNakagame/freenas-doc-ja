module.exports = {
  title: 'FreeNAS 日本語ドキュメント',
  description: 'FreeNASオフィシャルドキュメントの日本語翻訳版です',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Install', link: '/Install'},
      { text: 'English/Official', link: 'https://www.ixsystems.com/documentation/freenas/'},
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    displayAllHeaders: true,
    activeHeaderLinks: true
  }
}