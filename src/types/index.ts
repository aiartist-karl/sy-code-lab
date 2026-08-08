export interface Agent {
  id: string;
  name: string;
  description: string;
  avatar: string;
  conversationCount: number;
  category: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  loading?: boolean;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  modifiedAt: string;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}
