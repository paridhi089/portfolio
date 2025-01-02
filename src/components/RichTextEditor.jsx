import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import { LuImagePlus } from 'react-icons/lu';
import ImageWithLink from './TipTap/ImageWithLink';

const RichTextEditor = ({ content, onChange }) => {
  const [formData, setFormData] = useState({
    src: '',
    href: '',
    alt: '',
    caption: '', // Add caption field
  });

  const [showImageForm, setShowImageForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const insertImageWithCaption = () => {
    editor.chain().focus().setImageWithCaption(formData).run();
    setFormData({ src: '', href: '', alt: '', caption: '' });
    setShowImageForm(false);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageWithLink,
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold capitalize',
          levels: [2],
        },
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'ProseMirror bg-white text-black shadow appearance-none min-h-[550px] border rounded w-full py-2 px-3 text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline',
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white justify-stretch min-h-[200px] border rounded-lg border-b-0">
      <div className="flex bg-white items-center gap-2 mx-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
          title="Bold (Ctrl+B)"
        >
          <b className="text-black bg-white">B</b>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
          title="Italic (Ctrl+I)"
        >
          <i className="text-black bg-white">I</i>
        </button>

        <button onClick={() => setShowImageForm(true)} title="Add Image">
          <LuImagePlus className="bg-white" />
        </button>
      </div>

      {showImageForm && (
        <div className="p-4 bg-white rounded shadow-md my-2 border">
          <input
            type="text"
            name="src"
            placeholder="Image URL"
            value={formData.src}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded bg-white"
          />
          <input
            type="text"
            name="href"
            placeholder="Link URL"
            value={formData.href}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded bg-white"
          />
          <input
            type="text"
            name="alt"
            placeholder="Alt Text"
            value={formData.alt}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded bg-white"
          />
          <input
            type="text"
            name="caption"
            placeholder="Caption"
            value={formData.caption}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded bg-white"
          />
          <button
            onClick={insertImageWithCaption}
            className="p-2 bg-black text-white rounded-md mr-6"
          >
            Insert Image
          </button>
          <button
            onClick={() => setShowImageForm(false)}
            className="p-2 bg-red-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      )}

      <EditorContent editor={editor} className="bg-white" />
    </div>
  );
};

export default RichTextEditor;
