import { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">
      <Sidebar
        activeItem={activeItem}
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onLogout={() => console.log("Sair")}
        onSelectItem={setActiveItem}
        onToggleCollapse={() => setIsSidebarCollapsed((current) => !current)}
        onToggleMobile={() => setIsMobileSidebarOpen((current) => !current)}
      />

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {activeItem === "Dashboard" ? (
          <Dashboard />
        ) : (
          <section>
            <h1 className="text-3xl font-bold text-slate-950">{activeItem}</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Esta área será construída nas próximas etapas do CWork.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
