import { Timeline } from '@/components/ui/timeline';
import { Header } from '@/components/ui/header';

const navLinks = [
  { label: 'The Explosion', href: '#checkpoint-0' },
];

const RefLink = ({ n, href }: { n: number; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E50914] hover:underline"
  >
    <sup>[{n}]</sup>
  </a>
);

const timelineData = [
  {
    title: 'The Explosion',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Netflix started as a US DVD-by-mail service. Getting to hundreds of millions of subscribers worldwide took about two decades, and most of that growth shows up here. Each bar represents one year's worth of titles added to the catalog, split between Movies (red) and TV Shows (grey). The golden ▼ markers sit above key moments in Netflix's history — hover over them to see what was happening at each jump.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(229,9,20,0.05)] mb-6">
          <iframe
            src="/visualizations/figure1_explosion.html"
            title="The Explosion: Netflix Catalog Growth Over Time"
            className="w-full border-0"
            style={{ height: '560px' }}
          />
        </div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The very short bars before 2016 might look like Netflix barely existed back then. That's mostly a data problem. Netflix's own{' '}<RefLink n={1} href="https://s22.q4cdn.com/959853165/files/doc_financials/annual_reports/Final_AR_10K.pdf" /> 2008 Annual Report puts the streaming library at 12,000 titles by the end of that year. The near-zero counts in the early chart years almost certainly reflect how this dataset was collected: it's a snapshot of the catalog at a single point in time. Any title added years earlier but later removed simply doesn't appear. Older titles that survived may never have had their original add date recorded properly. So 2016 is roughly where the numbers start to be trustworthy.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          From 2016 onward the growth is real. Netflix expanded to 130 new territories in a single move that year, and the catalog additions followed. The climb went all the way to a peak in 2019, over 2,000 titles added in a single year, before pulling back through 2021. That decline lines up with what you'd expect: COVID-19 shut down productions across the industry, and Netflix became more selective at roughly the same time as competition from Disney+, HBO Max, and others picked up.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Movies consistently outnumber TV Shows by more than 2:1. At the 2019 peak, over 1,400 movies were added in a single year; TV Shows came to around 595. Part of that gap is real, Netflix acquired a lot of film licenses. But some of it is a counting artifact: each TV series takes up exactly one row in the data, regardless of how many seasons or episodes it has. A 10-season drama and a one-episode special count exactly the same. So movies look more dominant in raw title counts than they actually are in terms of watch time.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          The golden milestone markers point to the decisions that shaped the growth curve: the debut of original content in 2013 with <em>House of Cards</em>, the global expansion in 2016, the launch of Netflix Animation in 2018, and the move into gaming in 2021. Each one changed what kind of company Netflix was becoming, moving from distributor to studio to something closer to a full entertainment platform.
        </p>
      </div>
    ),
  },
];

const references = [
  { n: 1, label: 'Netflix — 2008 Annual Report (10-K)', href: 'https://s22.q4cdn.com/959853165/files/doc_financials/annual_reports/Final_AR_10K.pdf' },
  { n: 2, label: 'The Movie Database (TMDB) — User ratings', href: 'https://www.themoviedb.org' },
  { n: 3, label: 'TMDB Developer Documentation — Popularity & Trending', href: 'https://developer.themoviedb.org/docs/popularity-and-trending' },
];

const contributions = [
  { name: 'Lucas Patricio Martin Campopiano', id: 's250484', sections: 'Data cleaning, merging, and EDA' },
  { name: 'Levente Murgás', id: 's242957', sections: 'Figure 1 — The Explosion, website development' },
  { name: 'Kostas Papadopoulos', id: 's250219', sections: 'Genre and content rating analysis' },
];

function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#191919' }}>
      <Header links={navLinks} />
      <div className="pt-16">
        <Timeline data={timelineData} />
      </div>

      {/* References */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-12">
        <div className="border-t border-[#333] pt-10">
          <h3 className="text-white text-lg md:text-2xl font-bold mb-6">References</h3>
          <ol className="list-decimal list-inside space-y-2">
            {references.map((ref) => (
              <li key={ref.n} className="text-[#A0A0A0] text-xs md:text-sm">
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E50914] hover:underline break-all"
                >
                  {ref.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Contributions */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
        <div className="border-t border-[#333] pt-10">
          <h3 className="text-white text-lg md:text-2xl font-bold mb-6">Contributions</h3>
          <div className="space-y-4">
            {contributions.map((c) => (
              <div key={c.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-white text-sm md:text-base font-medium">
                  {c.name} <span className="text-[#666] font-normal">({c.id})</span>
                </span>
                <span className="text-[#555] hidden sm:inline">—</span>
                <span className="text-[#A0A0A0] text-sm md:text-base">{c.sections}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
