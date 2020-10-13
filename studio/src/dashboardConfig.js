export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f85f3e63c65e25e5876319b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ps3r9ovw',
                  apiId: 'cada2476-61e4-4bbe-a255-158f9beee724'
                },
                {
                  buildHookId: '5f85f3e6cdda755df4152b75',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-o6yzg9g2',
                  apiId: '1bd065dd-e8c7-4f91-a389-22e79023d80f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moxdev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-o6yzg9g2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
