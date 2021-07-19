export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60f55c758f140b442b9d1f2a',
                  title: 'Sanity Studio',
                  name: 'sanity-web-studio',
                  apiId: '84fa30ef-eac3-4c86-b672-74e7088aaab9'
                },
                {
                  buildHookId: '60f55c75bc7fd12de530186d',
                  title: 'Blog Website',
                  name: 'sanity-web-vn9xqt4k',
                  apiId: 'c97f5fc3-8315-4664-bbda-7a683ad278de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaplanark/sanity-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-web-vn9xqt4k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
