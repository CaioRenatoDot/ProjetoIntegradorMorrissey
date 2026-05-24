const navItems = ["Dashboard", "Clientes", "Tarefas", "Relatorios"];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold text-slate-950">
          CWork
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Novo cliente
        </button>
      </nav>
    </header>
  );
}
