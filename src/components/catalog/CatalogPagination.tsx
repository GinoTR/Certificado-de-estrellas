import Link from "next/link";

type CatalogPaginationProps = {
  totalPages: number;
  page: number;
  q: string;
  type: string;
};

function pageHref(page: number, q: string, type: string): string {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (type) params.set("type", type);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/catalog?${qs}` : "/catalog";
}

export default function CatalogPagination({
  totalPages,
  page,
  q,
  type,
}: CatalogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Paginación">
      <Link
        href={pageHref(Math.max(1, page - 1), q, type)}
        aria-disabled={page <= 1}
        className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
      >
        Anterior
      </Link>
      {pages.map((p) => (
        <Link
          key={p}
          href={pageHref(p, q, type)}
          className={`h-9 w-9 rounded-full border text-center text-sm leading-9 transition-all ${
            p === page
              ? "border-accent/60 bg-accent/10 text-text-primary"
              : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
          }`}
        >
          {p}
        </Link>
      ))}
      <Link
        href={pageHref(Math.min(totalPages, page + 1), q, type)}
        aria-disabled={page >= totalPages}
        className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
      >
        Siguiente
      </Link>
    </nav>
  );
}