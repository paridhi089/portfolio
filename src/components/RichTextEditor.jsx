import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import { mergeAttributes } from '@tiptap/core'
import { LuImagePlus } from "react-icons/lu";
import ImageWithLink from "./TipTap/ImageWithLink";
import { LuHeading1 } from "react-icons/lu";
import { LuHeading2 } from "react-icons/lu";
import { LuHeading3 } from "react-icons/lu";
import { LuHeading4 } from "react-icons/lu";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";

const RichTextEditor = ({ content, onChange }) => {
  const [formData, setFormData] = useState({
    src: "",
    href: "",
    alt: "",
    caption: "",
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
    setFormData({ src: "", href: "", alt: "", caption: "" });
    setShowImageForm(false);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: true,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      ImageWithLink,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3, 4] }).extend({
        levels: [1, 2, 3, 4],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level) 
            ? node.attrs.level 
            : this.options.levels[0]
          const classes = {
            1: 'text-4xl',
            2: 'text-3xl',
            3: 'text-2xl',
            4: 'text-xl'
          }
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ]
        },
      })
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "ProseMirror [&_ol]:list-decimal   [&_h1]:bg-transparent  [&_h2]:bg-transparent [&_h3]:bg-transparent [&_h4]:bg-transparent [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl [&_h4]:text-xl [&_ul]:list-disc bg-white text-black shadow appearance-none min-h-[550px] border rounded w-full py-2 px-3 text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
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
      <div className="flex bg-white items-center gap-2 mx-4 my-2 sticky top-0 z-10">
        <LuHeading1
          size={48}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`h-max rounded-md ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-400 text-white p-2"
              : "bg-white p-2"
          }`}
        />
        <LuHeading2
          size={40}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`h-max rounded-md ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-400 text-white p-2"
              : "bg-white p-2"
          }`}
        />
        <LuHeading3
          size={36}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`h-max rounded-md ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-400 text-white p-2"
              : "bg-white p-2"
          }`}
        />
        <LuHeading4
          size={32}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`h-max rounded-md ${
            editor.isActive("heading", { level: 4 })
              ? "bg-blue-400 text-white p-2"
              : "bg-white p-2"
          }`}
        />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
          title="Bold (Ctrl+B)"
        >
          <b className="text-black bg-white">B</b>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          title="Italic (Ctrl+I)"
        >
          <i className="text-black bg-white">I</i>
        </button>

        <button
          className="p-2"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <MdOutlineFormatListBulleted className="bg-white" size={24} />
        </button>
        <button
          className="p-2"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <MdFormatListNumbered className="bg-white" size={24} />
        </button>

        <button
          className="p-2"
          onClick={() => setShowImageForm(true)}
          title="Add Image"
        >
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

      <EditorContent editor={editor} className="mx-6 bg-white" />
    </div>
  );
};

export default RichTextEditor;
