import type { Agent, Message, FileItem, SearchResult } from '../types';

export const mockAgents: Agent[] = [
  { id: 'agent-1', name: '股市专家', description: 'AI 驱动的股票市场分析与投资建议', avatar: '/assets/images/stock-expert-avatar.png', conversationCount: 1284, category: '金融' },
  { id: 'agent-2', name: '用户研究', description: '进行用户访谈并生成研究报告', avatar: '/assets/images/user-reserach-avatar.png', conversationCount: 856, category: '调研' },
  { id: 'agent-3', name: '代码助手', description: '帮助你编写、调试和优化任意语言的代码', avatar: '/assets/images/code.png', conversationCount: 2341, category: '开发' },
  { id: 'agent-4', name: '写作搭档', description: '文章、故事等创意写作助手', avatar: '/assets/images/md.png', conversationCount: 567, category: '创作' },
  { id: 'agent-5', name: '数据分析师', description: '分析数据、创建图表并生成洞察', avatar: '/assets/images/excel.png', conversationCount: 1890, category: '分析' },
  { id: 'agent-6', name: '演示达人', description: '几分钟内设计精美演示文稿', avatar: '/assets/images/ppt.png', conversationCount: 743, category: '效率' },
];

export const mockMessages: Message[] = [
  { id: 'msg-1', role: 'user', content: '你好！你能帮我分析一下当前的市场趋势吗？', timestamp: Date.now() - 300000 },
  { id: 'msg-2', role: 'assistant', content: "当然可以！很高兴帮你分析市场趋势。市场最近表现出一些有趣的模式，科技股领涨复苏，AI 相关公司也实现了显著增长。", timestamp: Date.now() - 240000 },
  { id: 'msg-3', role: 'user', content: '下个季度我应该重点关注哪些行业？', timestamp: Date.now() - 180000 },
  { id: 'msg-4', role: 'assistant', content: '根据当前指标，以下是需要关注的首选行业：\n\n1. **人工智能** - 持续强劲增长\n2. **可再生能源** - 政策利好\n3. **医疗健康科技** - 数字健康扩展\n4. **半导体** - 供应链正常化', timestamp: Date.now() - 120000 },
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
  { id: 's-1', title: 'AI 写作助手', description: '生成博客文章、邮件等', icon: '/assets/images/md.png', category: '写作' },
  { id: 's-2', title: '图片生成器', description: '用文字提示创作精美图片', icon: '/assets/images/img.png', category: '设计' },
  { id: 's-3', title: '代码审查助手', description: '自动化代码审查与建议', icon: '/assets/images/code.png', category: '开发' },
  { id: 's-4', title: '表格分析器', description: '分析和可视化表格数据', icon: '/assets/images/excel.png', category: '分析' },
  { id: 's-5', title: 'PDF 摘要助手', description: '快速总结长篇 PDF 文档', icon: '/assets/images/pdf.png', category: '效率' },
  { id: 's-6', title: '演示文稿制作器', description: '创建专业演示文稿', icon: '/assets/images/ppt.png', category: '效率' },
];

export const hotTopics = [
  'AI 智能体', '机器学习', '网页开发', '数据科学',
  '产品设计', '市场分析', '代码审查', '文档 AI',
];
