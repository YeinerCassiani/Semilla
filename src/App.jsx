import React from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import BottomNav from "./components/layout/BottomNav/BottomNav";
import AppRouter from "./Router";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext";
import { ChatProvider } from "./context/ChatContext";
import { MetricsProvider } from "./context/MetricsContext";

const FooterCondition = () => {
  const { pathname } = useLocation();
  const hideFooterRoutes = ["/chat", "/publish", "/login"];
  if (hideFooterRoutes.some((route) => pathname.includes(route))) return null;
  return <Footer />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <ChatProvider>
            <MetricsProvider>
              <div className="app-container">
                <Header />
                <main className="main-content">
                  <AppRouter />
                </main>
                <FooterCondition />
                <BottomNav />
              </div>
            </MetricsProvider>
          </ChatProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
