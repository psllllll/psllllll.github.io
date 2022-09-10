module.exports = {
    title: '小彭的博客', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    description: '小彭的vuepress博客网站', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    themeConfig: {
        //logo: '../img/logo.png',
        //导航栏链接
        nav: [
            { text: 'Home', link: '/',target:'_self' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            //当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表 ：
            {
                text: '小彭的博客',
                //ariaLabel: 'Language Menu',
                items: [
                  { text: 'CSDN', link: 'http://baidu.com' },
                  { text: '掘进', link: 'http://baidu.com' }
                ]
              }
          ],
          sidebar: [
            {
              title: '网站介绍',
              path: '/',
            },
            {
              title: '学习文档',
              children: [
                { title: 'javascript', path: '/document/Javascript' },
                { title: 'node', path: '/document/Node' },
              ],
            },
            {
                title: '项目文档',
                children: [
                  { title: 'javascript', path: '/document/Javascript' },
                  { title: 'node', path: '/document/Node' },
                ],
              },
          ],        

    }
}