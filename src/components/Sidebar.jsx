import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import cworkLogo from "../assets/cwork-logo.png";
import cworkWordmark from "../assets/cwork-wordmark.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Empresas", icon: Building2 },
  { label: "Clientes", icon: Users },
  { label: "Atividades", icon: CalendarDays },
  { label: "Relatórios", icon: FileText },
];

export default function Sidebar({
  activeItem = "Dashboard",
  onSelectItem,
  isCollapsed = false,
  onToggleCollapse,
  onLogout,
}) {
  const CollapseIcon = isCollapsed ? ChevronRight : ChevronLeft;

  return (
    <aside
      aria-label="Barra lateral"
      className={`sticky top-0 flex h-screen flex-col border-r border-slate-200 bg-white text-slate-700 transition-[width] duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
        <button
          aria-label="Ir para o Dashboard"
          className={`group flex min-w-0 items-center gap-3 rounded-lg text-left transition ${
            isCollapsed ? "justify-center" : ""
          }`}
          onClick={() => onSelectItem?.("Dashboard")}
          type="button"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 ease-out before:absolute before:-inset-3 before:rounded-full before:bg-cyan-300/0 before:blur-xl before:transition before:duration-300 group-hover:scale-110 group-hover:border-cyan-200/80 group-hover:bg-white/55 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_10px_30px_rgba(8,145,178,0.24)] group-hover:backdrop-blur-xl group-hover:before:bg-cyan-300/45">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/95 via-cyan-100/80 to-sky-200/55" />
              <span className="absolute inset-x-1 top-1 h-1/2 rounded-full bg-white/65 blur-md" />
              <span className="absolute -left-6 top-0 h-14 w-5 rotate-12 bg-white/90 blur-[1px] transition duration-700 group-hover:translate-x-20" />
            </span>
            <img
              alt="Logo CWork"
              className="relative h-full w-full object-contain p-0.5 transition duration-300 group-hover:scale-95 group-hover:saturate-150"
              src={cworkLogo}
            />
          </span>

          {!isCollapsed ? (
            <span className="flex h-9 max-w-36 items-center rounded-lg bg-[#0e1e33] px-3 shadow-sm">
              <img
                alt="CWork"
                className="h-6 w-full object-contain"
                src={cworkWordmark}
              />
            </span>
          ) : null}
        </button>

        {!isCollapsed ? (
          <button
            aria-label="Recolher menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            onClick={onToggleCollapse}
            title="Recolher menu"
            type="button"
          >
            <CollapseIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      {isCollapsed ? (
        <button
          aria-label="Expandir menu"
          className="mx-4 mt-4 inline-flex h-9 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
          onClick={onToggleCollapse}
          title="Expandir menu"
          type="button"
        >
          <CollapseIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      ) : null}

      <nav aria-label="Navegação principal" className="flex-1 px-3 py-5">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;

            return (
              <button
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-12 w-full items-center rounded-lg border text-sm font-semibold transition ${
                  isCollapsed ? "justify-center px-0" : "gap-3 px-3.5"
                } ${
                  isActive
                    ? "border-slate-900 bg-slate-950 text-white shadow-sm"
                    : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                }`}
                key={item.label}
                onClick={() => onSelectItem?.(item.label)}
                title={isCollapsed ? item.label : undefined}
                type="button"
              >
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-cyan-400"
                  />
                ) : null}

                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-slate-950"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>

                {!isCollapsed ? <span className="truncate">{item.label}</span> : null}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-3">
        <button
          aria-current={activeItem === "Meu Perfil" ? "page" : undefined}
          className={`mb-3 flex w-full items-center rounded-xl border text-left transition ${
            isCollapsed ? "h-11 justify-center px-0" : "gap-3 p-2.5"
          } ${
            activeItem === "Meu Perfil"
              ? "border-cyan-200 bg-cyan-50 text-slate-950 shadow-sm"
              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50/60 hover:text-slate-950"
          }`}
          onClick={() => onSelectItem?.("Meu Perfil")}
          title={isCollapsed ? "Meu Perfil" : undefined}
          type="button"
        >
          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
              activeItem === "Meu Perfil"
                ? "bg-slate-950 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            <User className="h-4.5 w-4.5" />
          </span>

          {!isCollapsed ? (
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">Meu Perfil</span>
              <span className="block truncate text-xs text-slate-500">Conta pessoal</span>
            </span>
          ) : null}
        </button>

        <button
          aria-current={activeItem === "Configurações" ? "page" : undefined}
          className={`mb-1 flex h-11 w-full items-center rounded-md text-sm font-medium transition ${
            isCollapsed ? "justify-center px-0" : "gap-3 px-3"
          } ${
            activeItem === "Configurações"
              ? "bg-slate-950 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
          }`}
          onClick={() => onSelectItem?.("Configurações")}
          title={isCollapsed ? "Configurações" : undefined}
          type="button"
        >
          <Settings aria-hidden="true" className="h-5 w-5 shrink-0" />
          {!isCollapsed ? <span>Configurações</span> : null}
        </button>

        <button
          aria-label="Sair"
          className={`flex h-11 w-full items-center rounded-md text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600 ${
            isCollapsed ? "justify-center px-0" : "gap-3 px-3"
          }`}
          onClick={onLogout}
          title={isCollapsed ? "Sair" : undefined}
          type="button"
        >
          <LogOut aria-hidden="true" className="h-5 w-5 shrink-0" />
          {!isCollapsed ? <span>Sair</span> : null}
        </button>
      </div>
    </aside>
  );
}
