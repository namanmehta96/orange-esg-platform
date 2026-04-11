import { useState, useRef, useEffect, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';
import { buildChatSystemPrompt, sendChatToAPI } from '../utils/api';
import { showToast } from '../utils/helpers';

function renderMarkdown(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code style="background:rgba(0,0,0,.08);padding:1px 4px;border-radius:3px;font-family:monospace;font-size:11px;">$1</code>')
    .replace(/^#{1,3}\s+(.+)$/gm, '<strong>$1</strong>')
    .replace(/^[-*]\s+(.+)$/gm, '<span style="display:block;padding-left:12px;position:relative;"><span style="position:absolute;left:0;">\u2022</span>$1</span>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

export default function Chatbot() {
  const {
    currentLang, T, currentCompany, apiKey,
    chatbotOpen, setChatbotOpen,
    chatHistory, setChatHistory,
    setSettingsOpen
  } = useApp();

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sending, setSending] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [hasPulsed, setHasPulsed] = useState(false);

  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const initializedRef = useRef(false);

  // Scroll to bottom when messages change or typing state changes
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  // Build suggestion prompts
  const buildSuggestions = useCallback(() => {
    const co = currentCompany;
    const name = co ? co.name.split(' ')[0] : '';
    if (co) {
      return [
        T('chat.s1', { name }),
        T('chat.s2'),
        T('chat.s3', { name }),
        T('chat.s4'),
        T('chat.s5')
      ];
    }
    return [
      T('chat.g1'),
      T('chat.g2'),
      T('chat.g3'),
      T('chat.g4'),
      T('chat.g5')
    ];
  }, [currentCompany, T]);

  // Initialize chatbot on first open
  useEffect(() => {
    if (chatbotOpen && chatHistory.length === 0 && !initializedRef.current) {
      initializedRef.current = true;
      const co = currentCompany;
      const welcomeMsg = co
        ? T('chat.welcome.co', { name: co.name })
        : T('chat.welcome.gen');
      setChatHistory([{ role: 'assistant', content: welcomeMsg }]);
      setSuggestions(buildSuggestions());
    }
  }, [chatbotOpen, chatHistory.length, currentCompany, T, setChatHistory, buildSuggestions]);

  // Reset initialized state when chatHistory is cleared externally (e.g. company change)
  useEffect(() => {
    if (chatHistory.length === 0) {
      initializedRef.current = false;
      setSuggestions([]);
      setShowNotice(false);
    }
  }, [chatHistory.length]);

  // Pulse animation on first load
  useEffect(() => {
    if (!hasPulsed) {
      setHasPulsed(true);
    }
  }, [hasPulsed]);

  const toggleChatbot = useCallback(() => {
    setChatbotOpen(prev => !prev);
  }, [setChatbotOpen]);

  const addMessage = useCallback((role, content) => {
    setChatHistory(prev => {
      const updated = [...prev, { role, content }];
      return updated.length > 20 ? updated.slice(-20) : updated;
    });
  }, [setChatHistory]);

  const sendMessage = useCallback(async (overrideVal) => {
    const val = (overrideVal || inputVal).trim();
    if (!val) return;
    setInputVal('');

    addMessage('user', val);

    // Clear suggestions after first user message
    setSuggestions([]);

    if (!apiKey) {
      setShowNotice(true);
      addMessage('assistant', T('chat.nokey'));
      return;
    }

    setIsTyping(true);
    setSending(true);

    try {
      const systemPrompt = buildChatSystemPrompt(currentCompany, currentLang);
      // Build messages for API - skip the initial welcome message
      setChatHistory(prev => {
        const allMessages = [...prev];
        const apiMessages = allMessages
          .filter((m, i) => !(i === 0 && m.role === 'assistant'))
          .map(m => ({ role: m.role, content: m.content }));
        // Ensure last message is the user's
        if (!apiMessages.length || apiMessages[apiMessages.length - 1].role !== 'user') {
          apiMessages.push({ role: 'user', content: val });
        }

        // Fire off the API call
        sendChatToAPI(apiKey, systemPrompt, apiMessages)
          .then(reply => {
            setIsTyping(false);
            setSending(false);
            addMessage('assistant', reply);
          })
          .catch(e => {
            setIsTyping(false);
            setSending(false);
            addMessage('assistant', T('chat.error') + ' ' + e.message);
          });

        return prev;
      });
    } catch (e) {
      setIsTyping(false);
      setSending(false);
      addMessage('assistant', T('chat.error') + ' ' + e.message);
    }
  }, [inputVal, apiKey, currentCompany, currentLang, T, addMessage, setChatHistory]);

  const handleKeydown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);

  const handleSuggestionClick = useCallback((text) => {
    sendMessage(text);
  }, [sendMessage]);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, [setSettingsOpen]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        id="chatbot-btn"
        className={!hasPulsed ? '' : 'pulse'}
        onClick={toggleChatbot}
        title="ESG Sales Assistant"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Panel */}
      <div id="chatbot-panel" className={chatbotOpen ? 'open' : ''}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <div className="chatbot-header-title">{T('chat.title')}</div>
            <div className="chatbot-header-sub">{T('chat.sub')}</div>
          </div>
          <button className="chatbot-close" onClick={toggleChatbot}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages" id="chatbot-messages" ref={messagesRef}>
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg ${msg.role}`}
              {...(msg.role === 'assistant'
                ? { dangerouslySetInnerHTML: { __html: renderMarkdown(msg.content) } }
                : {}
              )}
            >
              {msg.role === 'user' ? msg.content : null}
            </div>
          ))}
          {isTyping && (
            <div className="chat-typing">
              <span></span><span></span><span></span>
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        {suggestions.length > 0 && (
          <div id="chat-suggestions-wrap" className="chat-suggestions">
            {suggestions.map((prompt, i) => (
              <button
                key={i}
                className="chat-suggestion-chip"
                onClick={() => handleSuggestionClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="chatbot-input-area">
          <textarea
            className="chatbot-input"
            id="chatbot-input"
            ref={inputRef}
            placeholder={T('chat.placeholder')}
            rows="1"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeydown}
          />
          <button
            className="chatbot-send"
            id="chatbot-send-btn"
            onClick={() => sendMessage()}
            disabled={sending}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* API Notice */}
        {showNotice && (
          <div id="chat-api-notice" className="chat-api-notice">
            Add your <a onClick={openSettings}>API key in Settings</a> to enable AI coaching.
          </div>
        )}
      </div>
    </>
  );
}
