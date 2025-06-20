'use client'

import { useLoading } from '@/components/ui/loading-context'
import { useToast, ToastType, ToastAction } from '@/components/ui/toast'

export function useGlobalUI() {
  const { showLoading, hideLoading, isLoading } = useLoading()
  const { showToast } = useToast()

  // Helper functions for common toast scenarios
  const toast = {
    success: (title: string, description?: string) => 
      showToast('success', 'general', title, description),
    
    error: (title: string, description?: string) => 
      showToast('error', 'general', title, description),
    
    info: (title: string, description?: string) => 
      showToast('info', 'general', title, description),
    
    warning: (title: string, description?: string) => 
      showToast('warning', 'general', title, description),

    // Action-specific toasts
    saved: (title: string = 'Saved successfully') => 
      showToast('success', 'save', title),
    
    deleted: (title: string = 'Deleted successfully') => 
      showToast('success', 'delete', title),
    
    copied: (title: string = 'Copied to clipboard') => 
      showToast('success', 'copy', title),
    
    uploaded: (title: string = 'Uploaded successfully') => 
      showToast('success', 'upload', title),
    
    downloaded: (title: string = 'Downloaded successfully') => 
      showToast('success', 'download', title),

    created: (title: string = 'Created successfully') => 
      showToast('success', 'create', title),

    updated: (title: string = 'Updated successfully') => 
      showToast('success', 'update', title),

    // Custom action toast
    action: (type: ToastType, action: ToastAction, title: string, description?: string) =>
      showToast(type, action, title, description)
  }

  // Helper function for async operations with loading and toast
  const withLoadingToast = async <T>(
    operation: () => Promise<T>,
    options: {
      successMessage?: string
      errorMessage?: string
      loadingMessage?: string
    } = {}
  ): Promise<T> => {
    try {
      showLoading()
      const result = await operation()
      if (options.successMessage) {
        toast.success(options.successMessage)
      }
      return result
    } catch (error) {
      const errorMsg = options.errorMessage || 'Operation failed'
      toast.error(errorMsg, error instanceof Error ? error.message : 'Unknown error')
      throw error
    } finally {
      hideLoading()
    }
  }

  return {
    // Loading controls
    showLoading,
    hideLoading,
    isLoading,

    // Toast controls
    toast,
    showToast,

    // Combined operations
    withLoadingToast
  }
} 