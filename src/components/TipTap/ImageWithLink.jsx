import { Node, mergeAttributes } from '@tiptap/core';

const ImageWithLink = Node.create({
  name: 'imageWithLink',

  group: 'block', 
  inline: false,
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      href: { default: null },
      caption: { default: null }, // Add caption attribute
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-image-wrapper]',
        getAttrs: (dom) => {
          const img = dom.querySelector('img');
          const caption = dom.querySelector('figcaption');
          return {
            href: dom.getAttribute('data-href'),
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt'),
            caption: caption ? caption.innerText : null,
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const { href, caption, ...rest } = HTMLAttributes;

    return [
      'div',
      { 'data-image-wrapper': true, class: 'flex flex-col items-center my-4' },
      [
        'a',
        { href, target: '_blank', rel: 'noopener noreferrer' },
        ['img', mergeAttributes(rest, { class: 'rounded-md shadow-md max-w-full h-auto' })],
      ],
      caption
        ? [
            'figcaption',
            { class: 'text-sm text-gray-500 mt-2 text-center' },
            caption,
          ]
        : null,
    ];
  },

  addCommands() {
    return {
      setImageWithCaption:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default ImageWithLink;
