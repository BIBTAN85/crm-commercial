import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/clients", label: "Clients" },
  { href: "/visites", label: "Visites" },
  { href: "/relances", label: "Relances" },
  { href: "/devis", label: "Devis" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen md:grid md:grid-cols-[250px_1fr]">
      <aside className="hidden border-r border-slate-200 bg-white p-6 md:block">
        <p className="text-lg font-bold text-slate-900">Mini CRM</p>
        <p className="mb-8 text-sm text-slate-500">Commercial local</p>
        <nav className="space-y-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="p-4 sm:p-6 lg:p-8">
        <header className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-card md:hidden">
          <p className="font-semibold">Mini CRM</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1 text-xs ${
                    active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
