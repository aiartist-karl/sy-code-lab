import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { mockAgents, mockMessages } from '../../data/mockData';
import type { Message } from '../../types';

interface Conversation {
  id: string;
  agentId: string;
  title: string;
  messages: Message[];
  createdAt: number;
}

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const agent = mockAgents.find(a => a.id === id) || mockAgents[0];

  const [conversations, setConversations] = useState<Conversation[]>([
    { id: 'conv-1', agentId: agent.id, title: '当前对话', messages: mockMessages, createdAt: Date.now() - 300000 }
  ]);
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [showSidebar, setShowSidebar] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeConv = conversations.find(c => c.id === activeConvId);
  const messages = activeConv?.messages || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleNewConversation = () => {
    const newConv: Conversation = {
      id: `conv-${Date.now()}`,
      agentId: agent.id,
      title: '新对话',
      messages: [{
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: `你好！我是${agent.name}，有什么可以帮你的？`,
        timestamp: Date.now(),
      }],
      createdAt: Date.now(),
    };
    setConversations(prev => [newConv, ...prev]);
    setActiveConvId(newConv.id);
    setShowSidebar(false);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMessage: Message = { id: `msg-${Date.now()}`, role: 'user', content: inputText, timestamp: Date.now() };
    setConversations(prev => prev.map(c =>
      c.id === activeConvId
        ? { ...c, messages: [...c.messages, userMessage], title: c.messages.length <= 1 ? inputText.slice(0, 20) : c.title }
        : c
    ));
    setInputText('');
    setIsLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: `msg-${Date.now() + 1}`, role: 'assistant',
        content: '这是一个很好的问题！让我来帮你分析一下。根据目前的信息，我建议你可以从以下几个方面来考虑。',
        timestamp: Date.now(),
      };
      setConversations(prev => prev.map(c =>
        c.id === activeConvId ? { ...c, messages: [...c.messages, aiMessage] } : c
      ));
      setIsLoading(false);
    }, 1500);
  };

  const handleDeleteConversation = (convId: string) => {
    setConversations(prev => {
      const filtered = prev.filter(c => c.id !== convId);
      if (convId === activeConvId && filtered.length > 0) {
        setActiveConvId(filtered[0].id);
      }
      return filtered;
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A]">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] flex-shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <img src={agent.avatar} alt={agent.name} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
          <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{agent.name}</h1>
        </div>
        <button onClick={handleNewConversation} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600" title="新建会话">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Conversation List */}
        {showSidebar && (
          <>
            <div className="absolute inset-0 bg-black/30 z-20" onClick={() => setShowSidebar(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-[#1E293B] z-30 shadow-xl animate-slide-up overflow-y-auto">
              <div className="p-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">会话列表</h2>
                <button onClick={handleNewConversation} className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 active:bg-indigo-800">
                  + 新会话
                </button>
              </div>
              <div className="py-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`flex items-center gap-2 px-3 py-2.5 mx-2 rounded-lg cursor-pointer transition-colors ${conv.id === activeConvId ? 'bg-indigo-50 dark:bg-indigo-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    onClick={() => { setActiveConvId(conv.id); setShowSidebar(false); }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm truncate ${conv.id === activeConvId ? 'text-indigo-700 dark:text-indigo-300 font-medium' : 'text-slate-700 dark:text-slate-200'}`}>
                        {conv.title}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{conv.messages.length} 条消息</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteConversation(conv.id); }}
                      className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-400 hover:text-red-500"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400">AI</span></div>}
                <div className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed break-words ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md'}`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2 animate-fade-in">
              <img src={agent.avatar} alt="AI" className="w-7 h-7 rounded-full flex-shrink-0" />
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-3">
                <img src={theme === 'dark' ? '/assets/images/answer-loading-dark.gif' : '/assets/images/answer-loading-light.gif'} alt="思考中..." className="w-16 h-8 object-contain" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] px-3 py-2 safe-bottom flex-shrink-0">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="输入消息..."
            className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-0"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
