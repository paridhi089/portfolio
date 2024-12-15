import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading'
import { Image } from '@tiptap/extension-image'; 
import ListItem from  '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from "@tiptap/extension-bullet-list"



const RichTextEditor = ({ content, onChange }) => {

    const editor = useEditor({

        extensions: [
    
          StarterKit,
    
          ListItem,
    
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
    
              "ProseMirror bg-white text-black shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3  text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
    
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

    <div className="flex flex-col bg-white justify-stretch min-h-[200px] border rounded border-b-0">
      <div className="flex bg-white items-center gap-2 mb-2">
       
        <button
        
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
          title="Bold (Ctrl+B)"
        >
          <b>B</b>
        </button>
       
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded bg-white ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          title="Italic (Ctrl+I)"
        >
          <i>I</i>
        </button>
       
        
      </div>
     
      <EditorContent editor={editor} />
    </div>
   
  );
};

export default RichTextEditor;
