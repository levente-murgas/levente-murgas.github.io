import { Timeline } from '@/components/ui/timeline';
import { Header } from '@/components/ui/header';

const navLinks = [
  { label: 'The Explosion', href: '#checkpoint-0' },
  { label: 'The Global Map', href: '#checkpoint-1' },
  { label: 'The Maturity Bet', href: '#checkpoint-2' },
  { label: 'What Resonates', href: '#checkpoint-3' },
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
  {
    title: 'The Global Map',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The catalog exploded — but where did it all come from? A Netflix title in 2008 was almost always American. By 2021, a Korean thriller could be the most-watched show on the platform in twenty countries at once. This chart is the geography of that shift.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Each highlighted country on the map represents at least one title in the catalog, traced back to its primary production country. Click a country and the side panel ranks its top genres for Movies and TV Shows separately — flip between the two to see how different a country looks depending on which format you ask about.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          A few things to keep in mind. The <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">country</code> field is multi-value — a US/UK co-production lists both. To keep each title attributed to one place, only the first country listed is used, which is usually the primary producer. About 9% of rows have no country at all and are left out entirely. The genre tags from Netflix's own <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">listed_in</code> column are messy (one row might read "International TV Shows, TV Dramas, TV Mysteries"), so they get collapsed into ten broad buckets by keyword matching. A title can land in more than one bucket, and shares are normalised against the country's total title count, so the panel reads as roughly X-in-Y rather than raw tag counts.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(229,9,20,0.05)] mb-6">
          <iframe
            src="/visualizations/figure2_country_genre_map.html"
            title="The Global Map: Netflix Catalog by Country and Genre"
            className="w-full border-0"
            style={{ height: '620px' }}
          />
        </div>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-2 mb-3">What the data shows</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The US is the volume backbone — it leads every genre bucket in absolute terms, with a broad profile where Drama, Comedy, and Documentary all feature heavily. Nothing about it stands out as distinctive. It's the catalog's baseline.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Every other major producer has a signature of its own. Japan is the clearest outlier on Animation. Both its Movie and TV Show panels sit heavily in Animation/Anime, and no other major producer comes close to that share — the Movies/TV toggle barely changes the fingerprint because anime crosses both formats. South Korea looks like two different countries depending on which toggle you're on: K-drama dominates the TV side, while the Movie side leans Thriller and Crime (think <em>Train to Busan</em>, <em>The Call</em>, <em>Burning</em>). That gap is striking and consistent. India is heavily Drama- and Comedy-led on the Movie side, with a much smaller TV footprint — this reflects Netflix India's earlier reliance on licensed Bollywood catalog before its own originals ramped up. The UK's TV side has a noticeably stronger Crime and Documentary lean compared to its Movie profile. And Spain, Mexico, Brazil, and Turkey all share a recognisable profile: Drama and Romance lead, with Crime and Thriller close behind on the TV side.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The single most useful interaction here is the Movies/TV toggle. The Movie panel for a country is usually the licensing story — what Netflix bought from that market. The TV panel is the production story — what that country actually makes. Korea's gap between the two is dramatic. Japan's barely exists. India's tells you which side of the buy-vs-make line Netflix is still on for that market.
        </p>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">What the data can't tell you</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          Catalog presence isn't the same as cultural production. A country with strong domestic streaming services — Japan with Hulu Japan, Korea with Tving and Wavve — may export only a slice of what it actually produces. So this is really a map of what Netflix carries from each country, not a map of what each country makes. That distinction matters for Japan and Korea especially.
        </p>
      </div>
    ),
  },
  {
    title: 'The Maturity Bet',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          As Netflix's catalog grew, so did its tilt toward adult content. This chart tracks how the rating mix changed year by year from 2016 to 2021, split between Movies and TV Shows. Use the buttons above the chart to switch between the two.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(229,9,20,0.05)] mb-6">
          <iframe
            src="/visualizations/figure3_maturity.html"
            title="The Maturity Bet: Netflix Content Rating Distribution"
            className="w-full border-0"
            style={{ height: '640px' }}
          />
        </div>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-2 mb-3">How the tiers work</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Netflix's raw catalog uses two parallel rating systems: the MPAA system (G, PG, PG-13, R, NC-17) for Movies and the TV Parental Guidelines (TV-Y, TV-Y7, TV-PG, TV-14, TV-MA) for TV Shows. To put them on the same chart, both systems are merged into five tiers: <strong className="text-white">Kids</strong> (G, TV-Y, TV-Y7, TV-Y7-FV), <strong className="text-white">Family</strong> (PG, TV-PG), <strong className="text-white">Teens</strong> (PG-13, TV-14), <strong className="text-white">Mature</strong> (R, TV-MA, NC-17), and <strong className="text-white">Unrated</strong> (NR, UR, or anything unrecognized). Each title goes into exactly one tier, and shares are calculated as a percentage of all titles added that year for each content type, so every year adds up to 100%.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">What the data shows</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          <strong className="text-white">Movies</strong> leaned toward mature audiences from the start. The main shift within Movies is the Teens tier (PG-13 / TV-14), which grows from around 18% in 2016 to nearly 35% by 2021. The Mature share stays dominant but edges down slightly over the same period.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          <strong className="text-white">TV Shows</strong> started with a more balanced spread across tiers, but the Mature category grew steadily. Kids and Family programming dropped as a share of new TV shows, while Mature titles took up more of the total. The shift was gradual rather than a sharp pivot in any single year.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Looking at both types together, the declining share of Kids and Family content is consistent across Movies and TV Shows. That points to a broad move toward adult-focused programming rather than something specific to one format.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">A note on the ratings</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Netflix rates its own titles rather than going through an independent body. The MPAA and TV Parental Guidelines provide a framework, but Netflix originals may carry ratings that reflect marketing priorities as much as actual content. Netflix ramped up original production significantly after 2016, and because originals tend to target adult subscribers, they likely push the Mature share upward.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          The chart shows what changed in the composition, not why it changed. The data can't distinguish between subscriber demand, competitive pressure from other streamers, content costs, or deliberate strategy. Probably some mix of all of those.
        </p>
      </div>
    ),
  },
  {
    title: 'What Resonates',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The first three chapters answered <em>how much</em>, <em>from where</em>, and <em>for whom</em>. This one asks the harder question: of everything Netflix carries, what actually lands with audiences?
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Both metrics here come from The Movie Database (TMDB)<RefLink n={2} href="https://www.themoviedb.org" />, a community-driven site where registered users rate and track titles. <strong className="text-white">Vote average</strong> is the arithmetic mean of all user ratings on a 0–10 scale — crowdsourced votes, not critic scores. <strong className="text-white">Popularity</strong> is more involved: TMDB recalculates it daily using votes cast, page views, favourites, watchlist activity, release timing, and the previous day's score<RefLink n={3} href="https://developer.themoviedb.org/docs/popularity-and-trending" />. It has no fixed ceiling and decays over time. A film that gets a re-release will spike, then slowly drop back. Importantly, popularity is not a viewership number — it's a proxy for current TMDB attention.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Because raw popularity is extremely right-skewed — a handful of breakout titles score in the thousands while most sit near zero — both axes use <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">log1p(...)</code>. That keeps ordinary titles visible without letting <em>Stranger Things</em> and <em>Wednesday</em> flatten the rest of the catalog to the bottom of the plot. The trade-off is that differences on the chart are multiplicative: a one-unit jump in log popularity means a much bigger jump in raw popularity.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(229,9,20,0.05)] mb-6">
          <iframe
            src="/visualizations/figure4_rating_popularity.html"
            title="What Resonates: Netflix Ratings and Popularity by Genre and Country"
            className="w-full border-0"
            style={{ height: '930px' }}
          />
        </div>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-2 mb-3">What the data shows</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Niche genres often out-rate broad ones. On the TV side, Anime, Documentary, and Crime sit highest on average rating, while broad Drama and Comedy buckets come in slightly lower. One reading is that niche genres attract more self-selecting audiences who rate more generously. Another is that the broad buckets include a long tail of mediocre licensed catalog that drags the mean down. Both are probably true at once.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Popularity follows volume, not quality. Action and Drama lead on average popularity — those are the buckets where Netflix has the most globally marketed titles. The genres that rate highest are not the genres that attract the most attention. That gap is the most interesting structural finding here: TMDB approval and TMDB attention don't track each other very well.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          By country — with a minimum 20-title threshold applied to filter out statistical noise from single-entry countries — South Korea, Japan, the UK, and Taiwan lead on average rating. The United States sits closer to the middle despite producing the most titles. That's a volume effect, not a quality verdict: a catalog that large includes both hits and a very long tail of ordinary titles. India and Mexico show the inverse pattern — strong average popularity, more moderate average ratings.
        </p>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">What the data can't tell you</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          TMDB activity isn't Netflix viewership. A title with a devoted Netflix audience but little TMDB profile is invisible here. Coverage is also uneven: about 80% of TV Shows have TMDB data, but only around 38% of Movies, so the country and genre breakdowns are sharper on the TV side. And rating averages flatten recency — a fifteen-year-old classic and a two-year-old release with the same score read identically on this chart, even though their cultural footprints are nothing alike.
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
