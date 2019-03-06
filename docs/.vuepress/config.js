module.exports = {
  title: 'FreeNAS 日本語ドキュメント',
  description: 'FreeNAS 非公式日本語ドキュメント',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/'},
      { text: 'FreeNASについて', link: '/Introduction/'},
      { text: 'インストール', link: '/Install/'},
      { text: 'English/Official Site', link: 'https://www.ixsystems.com/documentation/freenas/'},
      { text: 'GitHub', link: 'https://github.com/TakumaNakagame/freenas-doc-ja'},
    ],
    sidebar: 'auto',
    sidebarDepth: 4,
    displayAllHeaders: true,
    activeHeaderLinks: true
  }
}