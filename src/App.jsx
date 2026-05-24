import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        activeItem={activeItem}
        isCollapsed={isSidebarCollapsed}
        onLogout={() => console.log("Sair")}
        onSelectItem={setActiveItem}
        onToggleCollapse={() => setIsSidebarCollapsed((current) => !current)}
      />

      <main className="flex-1 px-8 py-10">
        <h1 className="text-4xl font-bold text-slate-950">{activeItem}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Organize clientes, tarefas e oportunidades em um unico lugar.
        </p>
      </main>
    </div>
  );
}
