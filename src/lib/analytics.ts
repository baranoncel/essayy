import { track } from '@vercel/analytics'

// Define event types for better type safety
export type AnalyticsEvent = 
  // Essay Generation Events
  | 'essay_generated'
  | 'essay_generation_started'
  | 'essay_generation_failed'
  | 'essay_saved'
  | 'essay_topic_selected'
  | 'essay_type_selected'
  | 'essay_length_selected'
  | 'essay_style_selected'
  | 'citation_format_selected'
  
  // AI Detection Events
  | 'ai_detection_started'
  | 'ai_detection_completed'
  | 'ai_detection_failed'
  
  // AI Humanization Events
  | 'ai_humanization_started'
  | 'ai_humanization_completed'
  | 'ai_humanization_failed'
  
  // User Authentication Events
  | 'user_login_attempted'
  | 'user_login_success'
  | 'user_login_failed'
  | 'user_logout'
  | 'user_logout_attempted'
  | 'user_signup_attempted'
  | 'user_signup_success'
  | 'user_session_restored'
  
  // Navigation Events
  | 'page_view'
  | 'feature_page_visited'
  | 'blog_post_viewed'
  | 'pricing_page_viewed'
  
  // User Engagement Events
  | 'demo_started'
  | 'demo_completed'
  | 'contact_form_submitted'
  | 'newsletter_signup'
  | 'homepage_input_focused'
  
  // Billing Events
  | 'billing_page_visited'
  | 'subscription_started'
  | 'subscription_completed'
  | 'subscription_cancelled'
  
  // API Events
  | 'api_call_success'
  | 'api_error'
  
  // Feature Events
  | 'feature_used'
  
  // Error Events
  | 'error_occurred'
  | 'network_error'

// Event properties interface
export interface AnalyticsEventProperties {
  // Essay Generation Properties
  essay_type?: string
  essay_length?: number
  essay_topic?: string
  essay_style?: string
  citation_format?: string
  generation_time?: number
  word_count?: number
  
  // AI Detection Properties
  detection_score?: number
  detection_confidence?: number
  text_length?: number
  
  // AI Humanization Properties
  humanization_level?: string
  original_ai_score?: number
  humanized_ai_score?: number
  
  // User Properties
  user_id?: string
  user_email?: string
  is_authenticated?: boolean
  subscription_status?: string
  
  // Page Properties
  page_path?: string
  page_title?: string
  referrer?: string
  
  // Error Properties
  error_message?: string
  error_code?: string
  error_stack?: string
  
  // General Properties
  timestamp?: number
  session_id?: string
  device_type?: string
  browser?: string
  [key: string]: any
}

/**
 * Track an analytics event with Vercel Analytics
 * @param event - The event name
 * @param properties - Optional event properties
 */
export function trackEvent(event: AnalyticsEvent, properties?: AnalyticsEventProperties) {
  try {
    // Add timestamp if not provided
    const eventProperties = {
      ...properties,
      timestamp: properties?.timestamp || Date.now(),
    }

    // Track the event
    track(event, eventProperties)
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event, eventProperties)
    }
  } catch (error) {
    console.error('Failed to track analytics event:', error)
  }
}

/**
 * Track page views
 * @param pagePath - The page path
 * @param pageTitle - The page title
 * @param additionalProperties - Additional properties
 */
export function trackPageView(
  pagePath: string, 
  pageTitle?: string, 
  additionalProperties?: AnalyticsEventProperties
) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    ...additionalProperties,
  })
}

/**
 * Track user actions
 * @param action - The action performed
 * @param properties - Action properties
 */
export function trackUserAction(action: AnalyticsEvent, properties?: AnalyticsEventProperties) {
  trackEvent(action, {
    ...properties,
    user_id: properties?.user_id || 'anonymous',
  })
}

/**
 * Track errors
 * @param error - The error object or message
 * @param context - Additional context about the error
 */
export function trackError(error: Error | string, context?: AnalyticsEventProperties) {
  const errorMessage = typeof error === 'string' ? error : error.message
  const errorStack = typeof error === 'object' ? error.stack : undefined
  
  trackEvent('error_occurred', {
    error_message: errorMessage,
    error_stack: errorStack,
    ...context,
  })
}

/**
 * Track API calls
 * @param endpoint - The API endpoint
 * @param method - HTTP method
 * @param success - Whether the call was successful
 * @param responseTime - Response time in milliseconds
 * @param additionalProperties - Additional properties
 */
export function trackApiCall(
  endpoint: string,
  method: string,
  success: boolean,
  responseTime?: number,
  additionalProperties?: AnalyticsEventProperties
) {
  trackEvent(success ? 'api_call_success' : 'api_error', {
    endpoint,
    method,
    response_time: responseTime,
    ...additionalProperties,
  })
}

/**
 * Track feature usage
 * @param feature - The feature name
 * @param action - The action performed
 * @param properties - Feature properties
 */
export function trackFeatureUsage(
  feature: string,
  action: string,
  properties?: AnalyticsEventProperties
) {
  trackEvent('feature_used' as AnalyticsEvent, {
    feature_name: feature,
    feature_action: action,
    ...properties,
  })
}

// Export common tracking functions
export const analytics = {
  track: trackEvent,
  pageView: trackPageView,
  userAction: trackUserAction,
  error: trackError,
  apiCall: trackApiCall,
  featureUsage: trackFeatureUsage,
} 