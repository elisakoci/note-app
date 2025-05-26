import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NotesProvider from "./context/NotesContext";
import NotesPage from "./pages/NotesPage/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage/NoteDetailPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "antd";
import AppSidebar from "./layouts/AppSidebar";
import AppHeader from "./layouts/AppHeader";
import "./layouts/LayoutStyles.css";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <NotesProvider>
        <Layout className="main-layout">
          <AppSidebar collapsed={collapsed} />
          <Layout>
            <Header style={{ padding: 0 }}>
              <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            </Header>
            <Content
              style={{
                margin: 10,
                padding: 24,
                borderRadius: "8px",
                backgroundColor: "white",
              }}
            >
              <Routes>
                <Route path="/" element={<NotesPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </NotesProvider>
    </BrowserRouter>
  );
};

export default App;
