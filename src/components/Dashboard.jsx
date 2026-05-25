import {
  Building2,
  CalendarCheck,
  CircleDollarSign,
  UserPlus,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metrics = [
  {
    label: "Clientes ativos",
    value: "24",
    detail: "+3 nesta semana",
    icon: UserPlus,
  },
  {
    label: "Empresas cadastradas",
    value: "12",
    detail: "4 com contato recente",
    icon: Building2,
  },
  {
    label: "Atividades pendentes",
    value: "8",
    detail: "2 para hoje",
    icon: CalendarCheck,
  },
  {
    label: "Oportunidades",
    value: "R$ 18,4 mil",
    detail: "em negociação",
    icon: CircleDollarSign,
  },
];

const monthlyOpportunities = [
  { month: "Jan", oportunidades: 8 },
  { month: "Fev", oportunidades: 12 },
  { month: "Mar", oportunidades: 9 },
  { month: "Abr", oportunidades: 15 },
  { month: "Mai", oportunidades: 18 },
  { month: "Jun", oportunidades: 14 },
];

const clientStatus = [
  { label: "Ativos", value: 52, color: "#0e1e33" },
  { label: "Em negociação", value: 28, color: "#3b82f6" },
  { label: "Proposta enviada", value: 20, color: "#94a3b8" },
];

const activities = [
  "Retornar contato da empresa NovaTech",
  "Enviar proposta para Mercado Alves",
  "Atualizar cadastro da cliente Marina Souza",
];

const recentClients = [
  { name: "NovaTech Soluções", status: "Em negociação", owner: "Caio" },
  { name: "Mercado Alves", status: "Proposta enviada", owner: "Caio" },
  { name: "Studio Lima", status: "Novo contato", owner: "Caio" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Visão geral
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Acompanhe os principais números do CWork e veja o que precisa de
          atenção hoje.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
              key={metric.label}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                  <strong className="mt-3 block text-2xl font-bold text-slate-950">
                    {metric.value}
                  </strong>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e1e33]/5 text-[#0e1e33]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-500">{metric.detail}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Oportunidades por mês</h2>
              <p className="mt-1 text-sm text-slate-500">Novas negociações abertas</p>
            </div>
            <span className="rounded-full bg-[#0e1e33]/5 px-3 py-1 text-xs font-semibold text-[#0e1e33]">
              6 meses
            </span>
          </div>

          <div className="mt-6 h-56 sm:h-64">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={monthlyOpportunities}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  axisLine={false}
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  tickLine={false}
                  width={28}
                />
                <Tooltip
                  contentStyle={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                  }}
                  cursor={{ fill: "rgba(14, 30, 51, 0.06)" }}
                />
                <Bar
                  animationBegin={120}
                  animationDuration={900}
                  animationEasing="ease-out"
                  dataKey="oportunidades"
                  fill="#0e1e33"
                  isAnimationActive
                  name="Oportunidades"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <h2 className="text-lg font-bold text-slate-950">Status dos clientes</h2>
          <p className="mt-1 text-sm text-slate-500">Distribuição atual da carteira</p>

          <div className="mt-6 h-48 sm:h-52">
            <ResponsiveContainer height="100%" width="100%">
              <PieChart>
                <Pie
                  animationBegin={180}
                  animationDuration={900}
                  animationEasing="ease-out"
                  cx="50%"
                  cy="50%"
                  data={clientStatus}
                  dataKey="value"
                  innerRadius={54}
                  isAnimationActive
                  nameKey="label"
                  outerRadius={82}
                  paddingAngle={3}
                >
                  {clientStatus.map((status) => (
                    <Cell fill={status.color} key={status.label} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                  }}
                  formatter={(value) => [`${value}%`, "Carteira"]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-3">
            {clientStatus.map((status) => (
              <div className="flex items-center justify-between gap-3 text-sm" key={status.label}>
                <span className="flex items-center gap-2 text-slate-600">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: status.color }}
                  />
                  {status.label}
                </span>
                <strong className="text-slate-950">{status.value}%</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1.3fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <h2 className="text-lg font-bold text-slate-950">Atividades de hoje</h2>
          <div className="mt-4 space-y-3">
            {activities.map((activity) => (
              <label
                className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-3 text-sm text-slate-700"
                key={activity}
              >
                <input
                  className="h-4 w-4 rounded border-slate-300 accent-[#0e1e33]"
                  type="checkbox"
                />
                <span>{activity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-slate-950">Clientes recentes</h2>
            <button
              className="rounded-md border border-[#0e1e33]/20 px-3 py-2 text-sm font-semibold text-[#0e1e33] transition hover:border-[#0e1e33]/40"
              type="button"
            >
              Novo cliente
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-100">
            {recentClients.map((client) => (
              <div
                className="grid gap-3 border-b border-slate-100 px-4 py-3 last:border-b-0 sm:grid-cols-[1fr_auto] sm:gap-4"
                key={client.name}
              >
                <div>
                  <p className="font-semibold text-slate-900">{client.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{client.status}</p>
                </div>
                <span className="w-fit self-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {client.owner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
