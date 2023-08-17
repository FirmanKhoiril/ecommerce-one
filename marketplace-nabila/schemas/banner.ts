export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'bigText',
      title: 'BigText',
      type: 'string',
    },
    {
      name: 'backgroundColor',
      title: 'BackgroundColor',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'TextColor',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'string',
      minLength: 40,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'ButtonLink',
      type: 'string',
    },
  ],
}
