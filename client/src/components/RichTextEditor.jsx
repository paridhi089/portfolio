import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading'
import { Image } from '@tiptap/extension-image'; 
import ListItem from  '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from "@tiptap/extension-bullet-list"
import ImageWithLink from './TipTap/ImageWithLink'
import { LuImagePlus } from "react-icons/lu";



const RichTextEditor = ({ content, onChange }) => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    src: '',
    href: '',
    alt: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const insertImageWithLink = () => {
    editor.chain().focus().setImageWithLink(formData).run();
    setShowModal(false);
    setFormData({ src: '', href: '', alt: '' }); 
  };


    const editor = useEditor({

        extensions: [
    
          StarterKit,
    
          ListItem,

          ImageWithLink,
    
          Heading.configure({
    
            HTMLAttributes: {
    
              class: "text-xl font-bold capitalize",
    
              levels: [2],
    
            },
    
          }),
    
          BulletList.configure({
    
            HTMLAttributes: {
    
              class: "list-disc ml-2",
    
            },
    
          }),
    
          OrderedList.configure({
    
            HTMLAttributes: {
    
              class: "list-decimal ml-2",
    
            },
    
          }),
    
        ],
    
        immediatelyRender: false,
    
        editorProps: {
    
          attributes: {
    
            class:
    
              "ProseMirror bg-white text-black shadow appearance-none min-h-[550px] border rounded w-full py-2 px-3  text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
    
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
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
          title="Bold (Ctrl+B)"
        >
          <b className='text-black bg-white'>B</b>
        </button>
       
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          title="Italic (Ctrl+I)"
        >
          <i className='text-black bg-white'>I</i>
        </button>

        <button
        onClick={() => setShowModal(true)}
      >
        <LuImagePlus className='bg-white'/>
        
      </button>

      {showModal && (
        <div className="modal">
          <h3>Insert Image with Link</h3>
          <input
            type="text"
            name="src"
            placeholder="Image URL"
            value={formData.src}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="href"
            placeholder="Link URL"
            value={formData.href}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="alt"
            placeholder="Alt Text"
            value={formData.alt}
            onChange={handleInputChange}
          />
          <button onClick={insertImageWithLink}>Insert</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
       
        
      </div>
     
      <EditorContent className="bg-white" editor={editor} />
    </div>
   
  );
};

export default RichTextEditor;
