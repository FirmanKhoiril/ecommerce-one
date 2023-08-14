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
