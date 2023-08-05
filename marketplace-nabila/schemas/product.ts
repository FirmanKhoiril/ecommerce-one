export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alt',
            },
          ],
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 60,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'normalPrice',
      title: 'NormalPrice',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      maxLength: 3,
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
  ],
}
