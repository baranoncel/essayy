'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon, 
  Strikethrough, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo,
  Type,
  Download,
  Save,
  Eye,
  EyeOff,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Highlighter,
  Link as LinkIcon,
  Unlink,
  Table as TableIcon,
  Heading1,
  Heading2,
  Heading3,
  Palette,
  Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { countWords } from '@/lib/utils'

interface EssayEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  className?: string
  onSave?: () => void
  onExport?: (format: 'pdf' | 'docx') => void
}

export function EssayEditor({
  content,
  onChange,
  placeholder = "Start writing your essay...",
  maxLength = 20000,
  disabled = false,
  className,
  onSave,
  onExport
}: EssayEditorProps) {
  const [showStats, setShowStats] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      TextStyle,
      FontFamily,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-800',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CharacterCount.configure({
        limit: maxLength,
      }),
    ],
    content,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-gray max-w-none dark:prose-invert',
          'prose-headings:text-gray-900 prose-p:text-gray-800 prose-p:leading-7',
          'prose-strong:text-gray-900 prose-em:text-gray-800',
          'prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-600',
          'prose-ul:text-gray-800 prose-ol:text-gray-800 prose-li:text-gray-800',
          'prose-table:table-auto prose-td:border prose-td:border-gray-300 prose-td:p-2',
          'prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-50',
          'focus:outline-none min-h-[500px] px-6 py-8',
          'text-lg leading-relaxed',
          isFocused ? 'prose-headings:text-gray-900' : 'prose-headings:text-gray-700'
        ),
      },
    },
  })

  const setLink = useCallback(() => {
    if (!editor) return
    
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const addTable = useCallback(() => {
    if (!editor) return
    
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }, [editor])

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) {
    return null
  }

  const characterCount = editor.storage.characterCount.characters()
  const wordCount = countWords(editor.getText())
  const isNearLimit = characterCount > maxLength * 0.8

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    disabled = false, 
    children, 
    title 
  }: {
    onClick: () => void
    isActive?: boolean
    disabled?: boolean
    children: React.ReactNode
    title: string
  }) => (
    <Button
      variant={isActive ? "default" : "ghost"}
      size="sm"
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()} // Prevent losing focus
      disabled={disabled}
      title={title}
      className={cn(
        "h-8 w-8 p-0",
        isActive && "bg-gray-900 text-white hover:bg-gray-800"
      )}
    >
      {children}
    </Button>
  )

  return (
    <div className={cn("w-full space-y-6", className)}>
      {/* Header with title and stats toggle */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <Type className="h-5 w-5 text-blue-600" />
          Rich Text Editor
        </label>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowStats(!showStats)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showStats ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
            {showStats ? 'Hide Stats' : 'Show Stats'}
          </Button>
          {onSave && (
            <Button
              variant="outline"
              size="sm"
              onClick={onSave}
              disabled={disabled}
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
          )}
        </div>
      </div>

      {/* Custom CSS for editor */}
      <style jsx global>{`
        .essay-editor .ProseMirror {
          outline: none;
          padding: 2rem;
          font-size: 1.125rem;
          line-height: 1.75;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .essay-editor .ProseMirror h1 {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 2rem 0 1rem 0;
          color: #111827;
        }
        
        .essay-editor .ProseMirror h2 {
          font-size: 1.875rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 1.5rem 0 0.75rem 0;
          color: #111827;
        }
        
        .essay-editor .ProseMirror h3 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 1.25rem 0 0.5rem 0;
          color: #111827;
        }
        
        .essay-editor .ProseMirror p {
          margin: 0.75rem 0;
          color: #374151;
        }
        
        .essay-editor .ProseMirror blockquote {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          border-left: 4px solid #e5e7eb;
          font-style: italic;
          color: #6b7280;
        }
        
        .essay-editor .ProseMirror ul, .essay-editor .ProseMirror ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .essay-editor .ProseMirror li {
          margin: 0.25rem 0;
        }
        
        .essay-editor .ProseMirror table {
          border-collapse: collapse;
          margin: 1.5rem 0;
          width: 100%;
        }
        
        .essay-editor .ProseMirror td, .essay-editor .ProseMirror th {
          border: 1px solid #d1d5db;
          padding: 0.5rem 0.75rem;
          position: relative;
        }
        
        .essay-editor .ProseMirror th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        
        .essay-editor .ProseMirror mark {
          background-color: #fef3c7;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
        }
        
        .essay-editor .ProseMirror a {
          color: #2563eb;
          text-decoration: underline;
          transition: color 0.2s;
        }
        
        .essay-editor .ProseMirror a:hover {
          color: #1d4ed8;
        }
        
        .essay-editor .ProseMirror strong {
          font-weight: 600;
        }
        
        .essay-editor .ProseMirror em {
          font-style: italic;
        }
        
        .essay-editor .ProseMirror u {
          text-decoration: underline;
        }
        
        .essay-editor .ProseMirror s {
          text-decoration: line-through;
        }
        
        .essay-editor .ProseMirror [data-text-align="left"] {
          text-align: left;
        }
        
        .essay-editor .ProseMirror [data-text-align="center"] {
          text-align: center;
        }
        
        .essay-editor .ProseMirror [data-text-align="right"] {
          text-align: right;
        }
        
        .essay-editor .ProseMirror [data-text-align="justify"] {
          text-align: justify;
        }
      `}</style>

      {/* Comprehensive Toolbar */}
      <div className={cn(
        "sticky top-0 z-20 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3",
        "shadow-lg transition-all duration-200",
        isFocused ? "border-gray-300 shadow-xl" : "border-gray-200"
      )}>
        {/* First Row - Text Formatting */}
        <div className="flex items-center gap-3 mb-3">
          {/* Headings */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <Select
              value={
                editor.isActive('heading', { level: 1 }) ? 'h1' :
                editor.isActive('heading', { level: 2 }) ? 'h2' :
                editor.isActive('heading', { level: 3 }) ? 'h3' :
                'paragraph'
              }
              onValueChange={(value) => {
                if (value === 'h1') {
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                } else if (value === 'h2') {
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                } else if (value === 'h3') {
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                } else {
                  editor.chain().focus().setParagraph().run()
                }
              }}
            >
              <SelectTrigger className="w-[120px] h-8 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paragraph">Paragraph</SelectItem>
                <SelectItem value="h1">Heading 1</SelectItem>
                <SelectItem value="h2">Heading 2</SelectItem>
                <SelectItem value="h3">Heading 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Basic Formatting */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              isActive={editor.isActive('bold')}
              title="Bold (Ctrl+B)"
            >
              <Bold className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isActive={editor.isActive('italic')}
              title="Italic (Ctrl+I)"
            >
              <Italic className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              isActive={editor.isActive('underline')}
              title="Underline (Ctrl+U)"
            >
              <UnderlineIcon className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              isActive={editor.isActive('strike')}
              title="Strikethrough"
            >
              <Strikethrough className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              isActive={editor.isActive('highlight')}
              title="Highlight"
            >
              <Highlighter className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* Text Alignment */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              isActive={editor.isActive({ textAlign: 'left' })}
              title="Align Left"
            >
              <AlignLeft className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              isActive={editor.isActive({ textAlign: 'center' })}
              title="Align Center"
            >
              <AlignCenter className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              isActive={editor.isActive({ textAlign: 'right' })}
              title="Align Right"
            >
              <AlignRight className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              isActive={editor.isActive({ textAlign: 'justify' })}
              title="Justify"
            >
              <AlignJustify className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* History */}
          <div className="flex items-center gap-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              title="Undo (Ctrl+Z)"
            >
              <Undo className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              title="Redo (Ctrl+Y)"
            >
              <Redo className="h-4 w-4" />
            </ToolbarButton>
          </div>
        </div>

        {/* Second Row - Lists, Links, Tables */}
        <div className="flex items-center gap-3">
          {/* Lists */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              isActive={editor.isActive('bulletList')}
              title="Bullet List"
            >
              <List className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              isActive={editor.isActive('orderedList')}
              title="Numbered List"
            >
              <ListOrdered className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              isActive={editor.isActive('blockquote')}
              title="Quote"
            >
              <Quote className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <ToolbarButton
              onClick={setLink}
              isActive={editor.isActive('link')}
              title="Add Link"
            >
              <LinkIcon className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().unsetLink().run()}
              disabled={!editor.isActive('link')}
              title="Remove Link"
            >
              <Unlink className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* Table */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <ToolbarButton
              onClick={addTable}
              title="Insert Table"
            >
              <TableIcon className="h-4 w-4" />
            </ToolbarButton>
          </div>

          {/* Export Options */}
          {onExport && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onExport('pdf')}
                disabled={disabled}
                title="Export as PDF"
                className="h-8"
              >
                <Download className="h-3 w-3 mr-1" />
                PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onExport('docx')}
                disabled={disabled}
                title="Export as Word Document"
                className="h-8"
              >
                <Download className="h-3 w-3 mr-1" />
                DOCX
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Bubble Menu for Selection */}
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="bg-gray-900 text-white rounded-lg shadow-xl p-2 flex items-center gap-1"
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            onMouseDown={(e) => e.preventDefault()}
            className={cn(
              "p-1 rounded hover:bg-gray-700 transition-colors",
              editor.isActive('bold') && "bg-gray-700"
            )}
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            onMouseDown={(e) => e.preventDefault()}
            className={cn(
              "p-1 rounded hover:bg-gray-700 transition-colors",
              editor.isActive('italic') && "bg-gray-700"
            )}
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            onMouseDown={(e) => e.preventDefault()}
            className={cn(
              "p-1 rounded hover:bg-gray-700 transition-colors",
              editor.isActive('underline') && "bg-gray-700"
            )}
          >
            <UnderlineIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            onMouseDown={(e) => e.preventDefault()}
            className={cn(
              "p-1 rounded hover:bg-gray-700 transition-colors",
              editor.isActive('highlight') && "bg-gray-700"
            )}
          >
            <Highlighter className="h-4 w-4" />
          </button>
          <button
            onClick={setLink}
            onMouseDown={(e) => e.preventDefault()}
            className={cn(
              "p-1 rounded hover:bg-gray-700 transition-colors",
              editor.isActive('link') && "bg-gray-700"
            )}
          >
            <LinkIcon className="h-4 w-4" />
          </button>
        </BubbleMenu>
      )}

      {/* Floating Menu for Empty Lines */}
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex items-center gap-1"
        >
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            onMouseDown={(e) => e.preventDefault()}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            onMouseDown={(e) => e.preventDefault()}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            onMouseDown={(e) => e.preventDefault()}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={addTable}
            onMouseDown={(e) => e.preventDefault()}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            title="Add Table"
          >
            <TableIcon className="h-4 w-4" />
          </button>
        </FloatingMenu>
      )}

      {/* Editor Container */}
      <div className={cn(
        "relative bg-white rounded-xl transition-all duration-200 border",
        isFocused ? "border-blue-200 bg-white shadow-lg" : "border-gray-200 bg-gray-50/30",
        disabled && "opacity-50 cursor-not-allowed"
      )}>
        {/* Placeholder when empty */}
        {editor.isEmpty && (
          <div className="absolute top-8 left-6 text-gray-400 text-lg pointer-events-none z-10">
            {placeholder}
          </div>
        )}

        {/* Editor Content */}
        <EditorContent 
          editor={editor} 
          className={cn(
            "essay-editor",
            "min-h-[600px]",
            disabled && "pointer-events-none"
          )}
        />
      </div>

      {/* Stats Bar */}
      {showStats && (
        <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Words:</span>
              <span className="font-medium text-gray-900">{wordCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Characters:</span>
              <span className={cn(
                "font-medium",
                isNearLimit ? "text-orange-600" : "text-gray-900",
                characterCount >= maxLength && "text-red-600"
              )}>
                {characterCount.toLocaleString()}
              </span>
              <span className="text-gray-500">/ {maxLength.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Progress bar */}
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  characterCount < maxLength * 0.8 ? "bg-blue-500" :
                  characterCount < maxLength * 0.9 ? "bg-yellow-500" :
                  characterCount < maxLength ? "bg-orange-500" : "bg-red-500"
                )}
                style={{ width: `${Math.min((characterCount / maxLength) * 100, 100)}%` }}
              />
            </div>
            
            {/* Reading time estimate */}
            <div className="text-gray-500 text-xs">
              ~{Math.ceil(wordCount / 200)} min read
            </div>
          </div>
        </div>
      )}

      {/* Character limit warning */}
      {characterCount >= maxLength && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <Type className="h-4 w-4 text-red-600" />
          <span className="text-sm text-red-700">
            Character limit reached. Please remove some content to continue writing.
          </span>
        </div>
      )}
    </div>
  )
} 