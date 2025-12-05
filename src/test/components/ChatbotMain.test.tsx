import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest'
import { render, screen, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import ChatbotMain from '@/components/ChatbotMain'
import { MemoryRouter } from 'react-router-dom'
import { ChatbotContextProvider } from '@/contexts/ChatbotContext'
import { chatbotsData } from '@/data/chatbots'
import { useIA } from '@/hooks/useAI'

vi.mock('@/hooks/useAI', () => ({
  useIA: vi.fn()
}))

describe('Testing Chat', () => {
  beforeEach(() => {
    vi.mocked(useIA).mockReturnValue({
      history: [],
      isLoading: false,
      sendMessage: vi.fn(),
      resetHistory: vi.fn()
    })
  })

  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  const renderChatbot = () => {
    return render(
      <MemoryRouter>
        <ChatbotContextProvider value={chatbotsData.omni}>
          <ChatbotMain />
        </ChatbotContextProvider>
      </MemoryRouter>
    )
  }

  it('Can type in the input', async () => {
    renderChatbot()
    const user = userEvent.setup()
    
    const promptInput = screen.getByRole('textbox', { name: /prompt input/i })
    
    await user.type(promptInput, 'What is 3.14 + 3.14?')
    
    expect(promptInput).toHaveValue('What is 3.14 + 3.14?')
  })

  it('Should call sendMessage when form is submitted', async () => {
    const mockSendMessage = vi.fn()
    vi.mocked(useIA).mockReturnValue({
      history: [],
      isLoading: false,
      sendMessage: mockSendMessage,
      resetHistory: vi.fn()
    })

    renderChatbot()
    const user = userEvent.setup()
    
    const promptInput = screen.getByRole('textbox', { name: /prompt input/i })
    const submitButton = screen.getByRole('button', { name: /submit prompt/i })
    
    await user.type(promptInput, 'What is 3.14 + 3.14?')
    await user.click(submitButton)
    
    expect(mockSendMessage).toHaveBeenCalledWith('What is 3.14 + 3.14?')
  })

  it('Should disable button when isLoading is true', () => {
    vi.mocked(useIA).mockReturnValue({
      history: [],
      isLoading: true,
      sendMessage: vi.fn(),
      resetHistory: vi.fn()
    })

    renderChatbot()
    
    const submitButton = screen.getByRole('button', { name: /submit prompt/i })
    
    expect(submitButton).toBeDisabled()
  })

  it('Should show AI response when history has model messages', () => {
    vi.mocked(useIA).mockReturnValue({
      history: [
        { 
          role: 'user', 
          parts: [{ text: 'What is 3.14 + 3.14?' }] 
        },
        { 
          role: 'model', 
          parts: [{ text: 'The answer is 6.28' }] 
        }
      ],
      isLoading: false,
      sendMessage: vi.fn(),
      resetHistory: vi.fn()
    })

    renderChatbot()
    
    expect(screen.getByText('What is 3.14 + 3.14?')).toBeInTheDocument()
    expect(screen.getByText('The answer is 6.28')).toBeInTheDocument()
  })

  it('Should show skeleton when loading new AI response', () => {
    vi.mocked(useIA).mockReturnValue({
      history: [
        { 
          role: 'user', 
          parts: [{ text: 'What is 3.14 + 3.14?' }] 
        }
      ],
      isLoading: true, 
      sendMessage: vi.fn(),
      resetHistory: vi.fn()
    })

    renderChatbot()
    
    expect(screen.getByTestId('skeleton-chat-ai')).toBeInTheDocument()
  })
})
