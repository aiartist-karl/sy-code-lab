import type { Agent, Message, FileItem, SearchResult } from '../types';

export const mockAgents: Agent[] = [
  { id: 'agent-1', name: 'Stock Expert', description: 'AI-powered stock market analysis and investment advice', avatar: '/assets/images/stock-expert-avatar.png', conversationCount: 1284, category: 'Finance' },
  { id: 'agent-2', name: 'User Research', description: 'Conduct user interviews and generate research reports', avatar: '/assets/images/user-reserach-avatar.png', conversationCount: 856, category: 'Research' },
  { id: 'agent-3', name: 'Code Assistant', description: 'Help you write, debug and optimize code in any language', avatar: '/assets/images/code.png', conversationCount: 2341, category: 'Development' },
  { id: 'agent-4', name: 'Writing Partner', description: 'Creative writing assistant for articles, stories and more', avatar: '/assets/images/md.png', conversationCount: 567, category: 'Creative' },
  { id: 'agent-5', name: 'Data Analyst', description: 'Analyze data, create charts and generate insights', avatar: '/assets/images/excel.png', conversationCount: 1890, category: 'Analytics' },
  { id: 'agent-6', name: 'Presentation Pro', description: 'Design stunning presentations in minutes', avatar: '/assets/images/ppt.png', conversationCount: 743, category: 'Productivity' },
];

export const mockMessages: Message[] = [
  { id: 'msg-1', role: 'user', content: 'Hello! Can you help me analyze the current market trends?', timestamp: Date.now() - 300000 },
  { id: 'msg-2', role: 'assistant', content: "Of course! I'd be happy to help you analyze market trends. The market has shown some interesting patterns recently, with tech stocks leading the recovery and AI-related companies seeing significant growth.", timestamp: Date.now() - 240000 },
  { id: 'msg-3', role: 'user', content: 'What sectors should I focus on for the next quarter?', timestamp: Date.now() - 180000 },
  { id: 'msg-4', role: 'assistant', content: 'Based on current indicators, here are the top sectors to watch:\n\n1. **Artificial Intelligence** - Continued strong growth\n2. **Renewable Energy** - Policy tailwinds\n3. **Healthcare Tech** - Digital health expansion\n4. **Semiconductors** - Supply chain normalization', timestamp: Date.now() - 120000 },
];

export const mockFiles: FileItem[] = [
  { id: 'f-1', name: 'Q4_Report.pdf', type: 'pdf', size: '2.4 MB', modifiedAt: '2024-01-15' },
  { id: 'f-2', name: 'Sales_Data.xlsx', type: 'excel', size: '1.8 MB', modifiedAt: '2024-01-14' },
  { id: 'f-3', name: 'Pitch_Deck.pptx', type: 'ppt', size: '5.2 MB', modifiedAt: '2024-01-13' },
  { id: 'f-4', name: 'design_mockup.png', type: 'image', size: '3.1 MB', modifiedAt: '2024-01-12' },
  { id: 'f-5', name: 'app.tsx', type: 'code', size: '12 KB', modifiedAt: '2024-01-11' },
  { id: 'f-6', name: 'README.md', type: 'text', size: '4 KB', modifiedAt: '2024-01-10' },
  { id: 'f-7', name: 'demo_video.mp4', type: 'video', size: '48 MB', modifiedAt: '2024-01-09' },
  { id: 'f-8', name: 'podcast.mp3', type: 'music', size: '15 MB', modifiedAt: '2024-01-08' },
];

export const mockSearchResults: SearchResult[] = [
  { id: 's-1', title: 'AI Writing Assistant', description: 'Generate blog posts, emails, and more', icon: '/assets/images/md.png', category: 'Writing' },
  { id: 's-2', title: 'Image Generator', description: 'Create stunning images from text prompts', icon: '/assets/images/img.png', category: 'Design' },
  { id: 's-3', title: 'Code Review Bot', description: 'Automated code review and suggestions', icon: '/assets/images/code.png', category: 'Development' },
  { id: 's-4', title: 'Spreadsheet Analyzer', description: 'Analyze and visualize spreadsheet data', icon: '/assets/images/excel.png', category: 'Analytics' },
  { id: 's-5', title: 'PDF Summarizer', description: 'Summarize long PDF documents instantly', icon: '/assets/images/pdf.png', category: 'Productivity' },
  { id: 's-6', title: 'Presentation Maker', description: 'Create professional presentations', icon: '/assets/images/ppt.png', category: 'Productivity' },
];

export const hotTopics = [
  'AI Agents', 'Machine Learning', 'Web Development', 'Data Science',
  'Product Design', 'Market Analysis', 'Code Review', 'Document AI',
];
