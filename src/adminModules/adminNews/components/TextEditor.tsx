"use client"

import { Color } from '@tiptap/extension-color'
import {Underline} from "@tiptap/extension-underline";
import {TextAlign} from "@tiptap/extension-text-align";
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {useCallback, useState} from 'react'
import Select from "react-select";
import SpriteSVG from "./SpriteSVG";
// @ts-ignore
import { BlockPicker } from 'react-color';
import {FontSize} from "tiptap-extension-font-size";
import {FontFamily} from "@tiptap/extension-font-family";
import {TextStyle} from "@tiptap/extension-text-style";
import {Paragraph} from "@tiptap/extension-paragraph";
import {Image} from "@tiptap/extension-image";

export default function TextEditor() {
  const [colorsDisplay, setColorsDisplay] = useState(false);
  const [color, setColor] = useState("#000000");

  const editor = useEditor({
    extensions: [
      Color,
      FontSize,
      Image.configure({
        inline: true,
      }),
      Paragraph.extend({
        addAttributes () {
          return {
            class: {
              default: "font-sansSource",
              // Take the attribute values
              renderHTML: attributes => {
                // … and return an object with HTML attributes.
                return {
                  class: `${attributes.class}`,
                }
              },
            },
          }
        },
      }),
      TextStyle,
      Underline,
      FontFamily,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "list-disc pl-4",
          }
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "list-decimal pl-4",
          }
        },
      }),
    ],
    content: "<p>Hello, hello!</p>",
  });

  const options = [
    { value: 'font-sourceSans', label: 'Source Sans Pro' },
    { value: 'font-ysabeau', label: 'Ysabeau' },
  ];

  const fontSizeOptions = [
    { value: "14px", label: "14px" },
    { value: "16px", label: "16px" },
    { value: "20px", label: "20px" },
    { value: "24px", label: "24px" },
    { value: "28px", label: "28px" },
    { value: "32px", label: "32px" },
    { value: "36px", label: "36px" },
    { value: "40px", label: "40px" },
    { value: "48px", label: "48px" },
    { value: "56px", label: "56px" },
    { value: "64px", label: "64px" },
  ]

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div>
      <div className={"flex items-center gap-4 px-4 py-3 border-b-[1px] border-b-[#525252] font-ys"}>
        <Select
          instanceId={"font"}
          options={options}
          unstyled={true}
          placeholder={"Source Sans Pro"}
          onChange={(event) => {
            editor?.chain().focus().updateAttributes("paragraph", { class: `${event!.value}` }).run();
          }}
          classNames={{
            control: () => (`text-black text-[14px]`),
            option: () => ("text-[14px]"),
            menu: () => ("w-full text-[14px] bg-white"),
            dropdownIndicator: () => ("pl-8"),
          }}/>
        <Select
          instanceId={"fontSize"}
          options={fontSizeOptions}
          unstyled={true}
          placeholder={"16"}
          onChange={(event) => {
            editor?.chain().focus().setFontSize(event!.value).run()
          }}
          classNames={{
            control: () => (`text-black text-[14px]`),
            option: () => ("text-[14px]"),
            menu: () => ("w-full text-[14px] bg-white"),
            dropdownIndicator: () => ("pl-[10px]"),
          }}/>
        <div className={"relative flex items-center gap-2 px-4"}>
          <button
            onClick={() => setColorsDisplay(true)}
            type={"button"}>
            <SpriteSVG name={"fill"}/>
          </button>
          <div style={{backgroundColor: color}} className={`w-[22px] h-[22px]`}></div>
          {colorsDisplay && (
            <div className={"absolute top-full left-[-33px]"}>
              <BlockPicker
                colors={["#B519F4", "#3892F5", "#C60047", "#F5A938", "#F10BD0"]}
                color={color}
                onChangeComplete={(color: any) => {
                  setColor(color.hex);
                  setColorsDisplay(false);

                  editor?.chain().focus().setColor(color.hex).run();
                }}
              />
            </div>
          )}
        </div>
        <div className={"flex items-center gap-4"}>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
          >
            <SpriteSVG name={"bold"}/>
          </button>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
          >
            <SpriteSVG name={"italic"}/>
          </button>
          <button
            type={"button"}
            onClick={() => {
              editor?.chain().focus().toggleUnderline().run()
            }}
          >
            <SpriteSVG name={"underline"}/>
          </button>
        </div>
        <div className={"flex items-center gap-4 px-4"}>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          >
            <SpriteSVG name={"textLeft"}/>
          </button>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          >
            <SpriteSVG name={"textCenter"}/>
          </button>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          >
            <SpriteSVG name={"textRight"}/>
          </button>
        </div>
        <div className={"flex items-center gap-4"}>
          <button
            type={"button"}
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          >
            <SpriteSVG name={"numbersList"}/>
          </button>
          <button
            type={"button"}
            onClick={() => {
              editor?.chain().focus().toggleBulletList().run()
            }}
          >
            <SpriteSVG name={"dotsList"}/>
          </button>
        </div>
        <button
          type={"button"}
          onClick={addImage}
        >
          <SpriteSVG name={"image"}/>
        </button>
      </div>
      <EditorContent className={"p-4 text-[16px] w-[900px]"} editor={editor} />
    </div>
  )
}