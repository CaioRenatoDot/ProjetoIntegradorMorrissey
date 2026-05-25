import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";
import cworkLogo from "../assets/cwork-logo.png";
import cworkWordmark from "../assets/cwork-wordmark.png";

const brandBlue = "#0e1e33";
const slideTransition = "transition-[max-width,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Empresas", icon: Building2 },
  { label: "Clientes", icon: Users },
  { label: "Atividades", icon: CalendarDays },
  { label: "Relatórios", icon: FileText },
];

function Brand({ isCollapsed = false, onClick }) {
  return (
    <button
      aria-label="Ir para o Dashboard"
      className={`group flex min-w-0 items-center gap-3 rounded-lg text-left transition ${
        isCollapsed ? "lg:justify-center" : ""
      }`}
      onClick={onClick}
      type="button"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 ease-out before:absolute before:-inset-3 before:rounded-full before:bg-[#0e1e33]/0 before:blur-xl before:transition before:duration-300 group-hover:scale-110 group-hover:border-[#0e1e33]/40 group-hover:bg-white/55 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_10px_30px_rgba(14,30,51,0.26)] group-hover:backdrop-blur-xl group-hover:before:bg-[#0e1e33]/35">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/95 via-[#0e1e33]/15 to-[#0e1e33]/30" />
          <span className="absolute inset-x-1 top-1 h-1/2 rounded-full bg-white/65 blur-md" />
          <span className="absolute -left-6 top-0 h-14 w-5 rotate-12 bg-white/90 blur-[1px] transition duration-700 group-hover:translate-x-20" />
        </span>
        <img
          alt="Logo CWork"
          className="relative h-full w-full object-contain p-0.5 transition duration-300 group-hover:scale-95 group-hover:saturate-150"
          src={cworkLogo}
        />
      </span>

      <span
        className={`flex h-9 items-center overflow-hidden rounded-lg shadow-sm ${slideTransition} ${
          isCollapsed
            ? "pointer-events-none max-w-0 -translate-x-2 opacity-0 lg:px-0"
            : "max-w-36 translate-x-0 px-3 opacity-100"
        }`}
        style={{ backgroundColor: brandBlue }}
      >
        <img alt="CWork" className="h-6 w-full min-w-24 object-contain" src={cworkWordmark} />
      </span>
    </button>
  );
}

export default function Sidebar({
  activeItem = "Dashboard",
  onSelectItem,
  isCollapsed = false,
  isMobileOpen = false,
  onToggleCollapse,
  onToggleMobile,
  onLogout,
}) {
  const CollapseIcon = isCollapsed ? ChevronRight : ChevronLeft;
  const MobileIcon = isMobileOpen ? X : Menu;

  const handleSelectItem = (item) => {
    onSelectItem?.(item);
    if (isMobileOpen) {
      onToggleMobile?.();
    }
  };

  const handleLogout = () => {
    onLogout?.();
    if (isMobileOpen) {
      onToggleMobile?.();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
        <Brand onClick={() => handleSelectItem("Dashboard")} />

        <button
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-[#0e1e33]/30 hover:text-[#0e1e33]"
          onClick={onToggleMobile}
          type="button"
        >
          <MobileIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </header>

      {isMobileOpen ? (
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden"
          onClick={onToggleMobile}
          type="button"
        />
      ) : null}

      <aside
        aria-label="Barra lateral"
        className={`fixed inset-y-0 left-0 z-40 flex w-72 transform-gpu flex-col overflow-hidden border-r border-slate-200 bg-white text-slate-700 shadow-xl transition-[transform,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,width] lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0 lg:shadow-none ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <Brand isCollapsed={isCollapsed} onClick={() => handleSelectItem("Dashboard")} />

          <button
            aria-label="Fechar menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-slate-500 transition hover:border-[#0e1e33]/30 hover:text-[#0e1e33] lg:hidden"
            onClick={onToggleMobile}
            title="Fechar menu"
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          {!isCollapsed ? (
            <button
              aria-label="Recolher menu"
              className="hidden h-9 w-9 items-center justify-center rounded-md border border-transparent text-slate-500 transition hover:border-[#0e1e33]/30 hover:text-[#0e1e33] lg:inline-flex"
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
            className="mx-4 mt-4 hidden h-9 items-center justify-center rounded-md border border-transparent text-slate-500 transition hover:border-[#0e1e33]/30 hover:text-[#0e1e33] lg:inline-flex"
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
                  className={`group relative flex h-12 w-full items-center gap-3 rounded-lg border px-3.5 text-sm font-semibold transition duration-300 ${
                    isCollapsed ? "lg:justify-center lg:px-2" : ""
                  } ${
                    isActive
                      ? "border-[#0e1e33] bg-[#0e1e33] text-white shadow-sm"
                      : "border-transparent bg-transparent text-slate-600 hover:border-[#0e1e33]/30 hover:bg-white hover:text-[#0e1e33]"
                  }`}
                  key={item.label}
                  onClick={() => handleSelectItem(item.label)}
                  title={isCollapsed ? item.label : undefined}
                  type="button"
                >
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-white/80"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#0e1e33]/5 group-hover:text-[#0e1e33]"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>

                  <span
                    className={`overflow-hidden whitespace-nowrap ${slideTransition} ${
                      isCollapsed
                        ? "max-w-0 -translate-x-2 opacity-0 lg:ml-0"
                        : "max-w-36 translate-x-0 opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-200 p-3">
          <button
            aria-current={activeItem === "Meu Perfil" ? "page" : undefined}
            className={`group mb-3 flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition duration-300 ${
              isCollapsed ? "h-11 justify-center lg:px-1" : ""
            } ${
              activeItem === "Meu Perfil"
                ? "border-[#0e1e33] bg-[#0e1e33] text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#0e1e33]/30 hover:text-[#0e1e33]"
            }`}
            onClick={() => handleSelectItem("Meu Perfil")}
            title={isCollapsed ? "Meu Perfil" : undefined}
            type="button"
          >
            <span
              aria-hidden="true"
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                activeItem === "Meu Perfil"
                  ? "bg-white/10 text-white"
                  : "bg-slate-100 text-slate-700 group-hover:bg-[#0e1e33]/5 group-hover:text-[#0e1e33]"
              }`}
            >
              <User className="h-4.5 w-4.5" />
            </span>

            <span
              className={`min-w-0 overflow-hidden ${slideTransition} ${
                isCollapsed ? "max-w-0 -translate-x-2 opacity-0" : "max-w-40 translate-x-0 opacity-100"
              }`}
            >
              <span className="block truncate text-sm font-semibold">Meu Perfil</span>
              <span
                className={`block truncate text-xs ${
                  activeItem === "Meu Perfil"
                    ? "text-white/70"
                    : "text-slate-500 group-hover:text-slate-600"
                }`}
              >
                Conta pessoal
              </span>
            </span>
          </button>

          <button
            aria-current={activeItem === "Configurações" ? "page" : undefined}
            className={`mb-1 flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium transition duration-300 ${
              isCollapsed ? "justify-center lg:px-2" : ""
            } ${
              activeItem === "Configurações"
                ? "bg-[#0e1e33] text-white"
                : "border border-transparent text-slate-600 hover:border-[#0e1e33]/30 hover:bg-white hover:text-[#0e1e33]"
            }`}
            onClick={() => handleSelectItem("Configurações")}
            title={isCollapsed ? "Configurações" : undefined}
            type="button"
          >
            <Settings aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span
              className={`overflow-hidden whitespace-nowrap ${slideTransition} ${
                isCollapsed ? "max-w-0 -translate-x-2 opacity-0" : "max-w-36 translate-x-0 opacity-100"
              }`}
            >
              Configurações
            </span>
          </button>

          <button
            aria-label="Sair"
            className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-600 transition duration-300 hover:bg-red-50 hover:text-red-600 ${
              isCollapsed ? "justify-center lg:px-2" : ""
            }`}
            onClick={handleLogout}
            title={isCollapsed ? "Sair" : undefined}
            type="button"
          >
            <LogOut aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span
              className={`overflow-hidden whitespace-nowrap ${slideTransition} ${
                isCollapsed ? "max-w-0 -translate-x-2 opacity-0" : "max-w-20 translate-x-0 opacity-100"
              }`}
            >
              Sair
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
