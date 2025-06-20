'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  X,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  Copy,
  Save,
  Send,
  FileText
} from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'
export type ToastAction = 'upload' | 'download' | 'view' | 'edit' | 'delete' | 'copy' | 'save' | 'send' | 'create' | 'update' | 'general'

export interface Toast {
  id: string
  type: ToastType
  action: ToastAction
  title: string
  description?: string
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  showToast: (type: ToastType, action: ToastAction, title: string, description?: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    
    setToasts((prev) => [...prev, newToast])
    
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback((
    type: ToastType, 
    action: ToastAction, 
    title: string, 
    description?: string, 
    duration?: number
  ) => {
    const toast: Omit<Toast, 'id'> = { type, action, title }
    if (description !== undefined) toast.description = description
    if (duration !== undefined) toast.duration = duration
    addToast(toast)
  }, [addToast])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

function getToastIcon(type: ToastType, action: ToastAction) {
  // Priority: specific action icons, then fallback to type icons
  switch (action) {
    case 'upload':
      return <Upload className="h-5 w-5" />
    case 'download':
      return <Download className="h-5 w-5" />
    case 'view':
      return <Eye className="h-5 w-5" />
    case 'edit':
    case 'update':
      return <Edit className="h-5 w-5" />
    case 'delete':
      return <Trash2 className="h-5 w-5" />
    case 'copy':
      return <Copy className="h-5 w-5" />
    case 'save':
      return <Save className="h-5 w-5" />
    case 'send':
      return <Send className="h-5 w-5" />
    case 'create':
      return <FileText className="h-5 w-5" />
    default:
      // Fallback to type-based icons
      switch (type) {
        case 'success':
          return <CheckCircle className="h-5 w-5" />
        case 'error':
          return <XCircle className="h-5 w-5" />
        case 'warning':
          return <AlertCircle className="h-5 w-5" />
        case 'info':
          return <Info className="h-5 w-5" />
      }
  }
}

function getToastStyles(type: ToastType) {
  switch (type) {
    case 'success':
      return 'bg-white border-gray-200 text-gray-900'
    case 'error':
      return 'bg-white border-gray-300 text-gray-900'
    case 'warning':
      return 'bg-white border-gray-200 text-gray-900'
    case 'info':
      return 'bg-white border-gray-200 text-gray-900'
    default:
      return 'bg-white border-gray-200 text-gray-900'
  }
}

function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-start p-4 rounded-lg border shadow-lg
            transform transition-all duration-300 ease-in-out
            animate-slide-in-from-right-full
            ${getToastStyles(toast.type)}
          `}
        >
          <div className="flex-shrink-0 mr-3 mt-0.5 text-gray-600">
            {getToastIcon(toast.type, toast.action)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {toast.title}
            </p>
            {toast.description && (
              <p className="mt-1 text-sm text-gray-600">
                {toast.description}
              </p>
            )}
          </div>
          
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
} 