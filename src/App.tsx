import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/Splash/SplashScreen';
import TabLayout from './components/TabBar';
import HomePage from './pages/Home/HomePage';
import ChatPage from './pages/Chat/ChatPage';
import AgentDetailPage from './pages/Agent/AgentDetailPage';
import SearchPage from './pages/Search/SearchPage';
import BrowserPage from './pages/Browser/BrowserPage';
import FilePreviewPage from './pages/File/FilePreviewPage';
import SettingsPage from './pages/Settings/SettingsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<TabLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/explore" element={<TabLayout />}>
          <Route index element={<SearchPage />} />
        </Route>
        <Route path="/me" element={<TabLayout />}>
          <Route index element={<SettingsPage />} />
        </Route>
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/agent/:id" element={<AgentDetailPage />} />
        <Route path="/browser" element={<BrowserPage />} />
        <Route path="/file/:type" element={<FilePreviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
