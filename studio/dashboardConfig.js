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
                  buildHookId: '601ae0523334300123659ec4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3b642fpj',
                  apiId: 'b4d9b6c1-4f26-4143-8911-d41c018acf8d'
                },
                {
                  buildHookId: '601ae052f5f12a00ee2f8807',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-igxjaicw',
                  apiId: '14251c89-3ec6-413f-b408-aa873aca807e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rizoadev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-igxjaicw.netlify.app', category: 'apps'}
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
