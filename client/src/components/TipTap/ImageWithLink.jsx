import { Node, mergeAttributes } from '@tiptap/core';

const ImageWithLink = Node.create({
  name: 'imageWithLink',

  group: 'inline',

  inline: true,

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      href: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'a[href] > img[src]',
        getAttrs: (dom) => ({
          href: dom.parentNode.getAttribute('href'),
          src: dom.getAttribute('src'),
          alt: dom.getAttribute('alt'),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const { href, ...rest } = HTMLAttributes;
    return ['a', { href }, ['img', mergeAttributes(rest)]];
  },

  addCommands() {
    return {
      setImageWithLink:
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
