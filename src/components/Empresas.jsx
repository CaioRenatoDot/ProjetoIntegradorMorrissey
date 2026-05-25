import { useMemo, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";


  {/*MOCK MOCK MOCK MOCK MOCK*/}

const companies = [
  {
    name: "NovaTech Soluções",
    segment: "Tecnologia",
    city: "São Paulo, SP",
    contact: "Renata Martins",
    email: "renata@novatech.com",
    phone: "(11) 99234-1180",
    status: "Em negociação",
    value: "R$ 8,5 mil",
    lastContact: "Hoje",
  },
  {
    name: "Mercado Alves",
    segment: "Varejo",
    city: "Campinas, SP",
    contact: "João Alves",
    email: "comercial@mercadoalves.com",
    phone: "(19) 98112-4420",
    status: "Proposta enviada",
    value: "R$ 5,2 mil",
    lastContact: "Ontem",
  },
  {
    name: "Studio Lima",
    segment: "Serviços",
    city: "Santos, SP",
    contact: "Marina Lima",
    email: "marina@studiolima.com",
    phone: "(13) 99620-9011",
    status: "Novo contato",
    value: "R$ 2,7 mil",
    lastContact: "2 dias",
  },
  {
    name: "ClimaSul Engenharia",
    segment: "Construção",
    city: "Curitiba, PR",
    contact: "Paulo Neri",
    email: "paulo@climasul.com",
    phone: "(41) 98801-7750",
    status: "Ativa",
    value: "R$ 12,4 mil",
    lastContact: "5 dias",
  },
  {
    name: "Agro Vale",
    segment: "Agronegócio",
    city: "Ribeirão Preto, SP",
    contact: "Carla Mendes",
    email: "carla@agrovale.com",
    phone: "(16) 99721-5400",
    status: "Ativa",
    value: "R$ 9,8 mil",
    lastContact: "1 semana",
  },
];

const metrics = [
  { label: "Empresas cadastradas", value: "12", detail: "+2 neste mês", icon: Building2 },
  { label: "Contatos ativos", value: "34", detail: "8 decisores", icon: Users },
  { label: "Negociações abertas", value: "7", detail: "R$ 26,2 mil", icon: TrendingUp },
  { label: "Follow-ups hoje", value: "4", detail: "prioridade alta", icon: Clock3 },
];

const statusStyles = {
  Ativa: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  "Em negociação": "bg-blue-50 text-blue-700 ring-blue-600/15",
  "Proposta enviada": "bg-amber-50 text-amber-700 ring-amber-600/15",
  "Novo contato": "bg-slate-100 text-slate-700 ring-slate-500/15",
};

const statusOptions = ["Todas", "Ativa", "Em negociação", "Proposta enviada", "Novo contato"];

export default function Empresas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Todas");

  const filteredCompanies = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return companies.filter((company) => {
      const matchesStatus = selectedStatus === "Todas" || company.status === selectedStatus;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [company.name, company.segment, company.city, company.contact]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [searchTerm, selectedStatus]);

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Cadastro comercial
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Empresas</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Organize contas, contatos e oportunidades por empresa.
          </p>
        </div>

        <button
          className="inline-flex h-11 w-fit items-center gap-2 rounded-md bg-[#0e1e33] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#132a45]"
          type="button"
        >
          <Plus aria-hidden="true" className="h-4 w-4" />
          Nova empresa
        </button>
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

      <section className="grid gap-4 xl:grid-cols-[1fr_20rem]">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">Lista de empresas</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredCompanies.length} registros encontrados
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative block sm:w-72">
                  <Search
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0e1e33]/40 focus:ring-4 focus:ring-[#0e1e33]/10"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Buscar empresa"
                    type="search"
                    value={searchTerm}
                  />
                </label>

                <select
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0e1e33]/40 focus:ring-4 focus:ring-[#0e1e33]/10"
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  value={selectedStatus}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3">Empresa</th>
                  <th className="px-5 py-3">Contato</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Valor</th>
                  <th className="px-5 py-3">Último contato</th>
                  <th className="px-5 py-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCompanies.map((company) => (
                  <tr className="transition hover:bg-slate-50/80" key={company.name}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e1e33]/5 text-[#0e1e33]">
                          <Building2 aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-slate-950">{company.name}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                            {company.segment} - {company.city}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-800">{company.contact}</p>
                      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                          {company.email}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Phone aria-hidden="true" className="h-3.5 w-3.5" />
                          {company.phone}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                          statusStyles[company.status]
                        }`}
                      >
                        {company.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-950">{company.value}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{company.lastContact}</td>
                    <td className="px-5 py-4 text-right">
                      <button
                        aria-label={`Abrir opções de ${company.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-[#0e1e33]"
                        type="button"
                      >
                        <MoreHorizontal aria-hidden="true" className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="text-lg font-bold text-slate-950">Pipeline</h2>
            <p className="mt-1 text-sm text-slate-500">Resumo por etapa comercial</p>

            <div className="mt-5 space-y-4">
              {["Novo contato", "Em negociação", "Proposta enviada", "Ativa"].map((status) => {
                const total = companies.filter((company) => company.status === status).length;
                const percentage = Math.max((total / companies.length) * 100, 8);

                return (
                  <div key={status}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{status}</span>
                      <span className="text-slate-500">{total}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <span
                        className="block h-full rounded-full bg-[#0e1e33]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-950">Próximo contato</h2>
                <p className="mt-1 text-sm text-slate-500">
                  NovaTech Soluções tem uma negociação em aberto para retornar hoje.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
