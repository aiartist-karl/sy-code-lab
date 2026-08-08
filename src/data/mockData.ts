import type { Agent, Message, FileItem, SearchResult } from '../types';

export const mockAgents: Agent[] = [
  { id: 'agent-1', name: '股票专家', description: 'AI 驱动的股票市场分析与投资建议', avatar: '/assets/images/stock-expert-avatar.png', conversationCount: 1284, category: '金融' },
  { id: 'agent-2', name: '用户研究', description: '用户访谈与调研分析报告生成', avatar: '/assets/images/user-reserach-avatar.png', conversationCount: 856, category: '调研' },
  { id: 'agent-3', name: '代码助手', description: '帮助你编写、调试和优化各类代码', avatar: '/assets/images/code.png', conversationCount: 2341, category: '开发' },
  { id: 'agent-4', name: '写作伙伴', description: '文章、故事、创意写作辅助', avatar: '/assets/images/md.png', conversationCount: 567, category: '创作' },
  { id: 'agent-5', name: '数据分析师', description: '数据分析、图表生成与洞察提取', avatar: '/assets/images/excel.png', conversationCount: 1890, category: '分析' },
  { id: 'agent-6', name: '演示高手', description: '快速设计精美的演示文稿', avatar: '/assets/images/ppt.png', conversationCount: 743, category: '效率' },
];

export const mockMessages: Message[] = [
  { id: 'msg-1', role: 'user', content: '你好！能帮我分析一下当前的市场趋势吗？', timestamp: Date.now() - 300000 },
  { id: 'msg-2', role: 'assistant', content: "当然可以！我很乐意帮你分析市场趋势。最近市场呈现一些有趣的变化，科技股引领复苏，AI 相关公司增长显著。", timestamp: Date.now() - 240000 },
  { id: 'msg-3', role: 'user', content: '下个季度我应该关注哪些板块？', timestamp: Date.now() - 180000 },
  { id: 'msg-4', role: 'assistant', content: '根据当前指标，以下是最值得关注的板块：\n\n1. **人工智能** - 持续强劲增长\n2. **新能源** - 政策利好推动\n3. **医疗科技** - 数字化医疗扩展\n4. **半导体** - 供应链恢复正常', timestamp: Date.now() - 120000 },
];

export const mockFiles: FileItem[] = [
  { id: 'f-1', name: 'Q4报告.pdf', type: 'pdf', size: '2.4 MB', modifiedAt: '2024-01-15' },
  { id: 'f-2', name: '销售数据.xlsx', type: 'excel', size: '1.8 MB', modifiedAt: '2024-01-14' },
  { id: 'f-3', name: '演示文稿.pptx', type: 'ppt', size: '5.2 MB', modifiedAt: '2024-01-13' },
  { id: 'f-4', name: '设计稿.png', type: 'image', size: '3.1 MB', modifiedAt: '2024-01-12' },
  { id: 'f-5', name: 'app.tsx', type: 'code', size: '12 KB', modifiedAt: '2024-01-11' },
  { id: 'f-6', name: '说明文档.md', type: 'text', size: '4 KB', modifiedAt: '2024-01-10' },
  { id: 'f-7', name: '演示视频.mp4', type: 'video', size: '48 MB', modifiedAt: '2024-01-09' },
  { id: 'f-8', name: '播客.mp3', type: 'music', size: '15 MB', modifiedAt: '2024-01-08' },
];

export const mockSearchResults: SearchResult[] = [
  { id: 's-1', title: 'AI 写作助手', description: '生成博客文章、邮件等内容', icon: '/assets/images/md.png', category: '写作' },
  { id: 's-2', title: '图像生成器', description: '从文字描述生成精美图片', icon: '/assets/images/img.png', category: '设计' },
  { id: 's-3', title: '代码审查机器人', description: '自动代码审查与建议', icon: '/assets/images/code.png', category: '开发' },
  { id: 's-4', title: '表格分析器', description: '分析和可视化表格数据', icon: '/assets/images/excel.png', category: '分析' },
  { id: 's-5', title: 'PDF 摘要', description: '快速提炼 PDF 长文档要点', icon: '/assets/images/pdf.png', category: '效率' },
  { id: 's-6', title: '演示制作', description: '创建专业演示文稿', icon: '/assets/images/ppt.png', category: '效率' },
];

export const hotTopics = [
  'AI 智能体', '机器学习', 'Web 开发', '数据科学',
  '产品设计', '市场分析', '代码审查', '文档 AI',
];
