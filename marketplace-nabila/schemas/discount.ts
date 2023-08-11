export default {
    name: 'discount',
    title: 'Discount',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          },
          {
            name: 'discount',
            title:'Discount',
            type: 'number',
            maxLength: 2

          },
          {
            name: 'title',
            title: "Title",
            type: 'string'
          }
    ]
}