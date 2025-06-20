import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT
    const azureKey = process.env.AZURE_OPENAI_KEY
    const azureDeployment = process.env.AZURE_OPENAI_DEPLOYMENT
    
    if (!azureEndpoint || !azureKey || !azureDeployment) {
      return NextResponse.json({
        success: false,
        error: 'Azure OpenAI configuration incomplete',
        config: {
          endpoint: !!azureEndpoint,
          key: !!azureKey,
          deployment: !!azureDeployment
        }
      })
    }

    // Test connection with a simple prompt
    const azureUrl = `${azureEndpoint}/openai/deployments/${azureDeployment}/chat/completions?api-version=2025-01-01-preview`

    const response = await fetch(azureUrl, {
      method: 'POST',
      headers: {
        'api-key': azureKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: 'Reply with just "Connection successful" if you can read this.'
          }
        ],
        max_tokens: 10,
        temperature: 0.1,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({
        success: false,
        error: `Azure OpenAI API error: ${response.statusText}`,
        details: errorText
      })
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      message: 'Azure OpenAI connection successful',
      response: data.choices[0]?.message?.content || 'No response content',
      config: {
        endpoint: azureEndpoint.replace(/^https?:\/\//, '').split('.')[0] + '.***',
        deployment: azureDeployment,
        model: data.model || 'Unknown'
      }
    })

  } catch (error) {
    console.error('Azure OpenAI test error:', error)
    return NextResponse.json({
      success: false,
      error: 'Connection test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
} 