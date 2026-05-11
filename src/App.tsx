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
          The catalog grew fast, but the more interesting question is where it all came from. A Netflix title in 2008 was almost always American. By 2021, a Korean thriller could be the most-watched show on the platform in twenty countries simultaneously. This chart maps that shift geographically.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Each highlighted country on the map has at least one title in the catalog, traced back to its primary production country. Click a country and the side panel shows its top genres for Movies and TV Shows separately. Flip between the two to see how different a country looks depending on which format you're asking about.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          A few things to flag upfront. The <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">country</code> field is multi-value: a US/UK co-production lists both countries. To give each title a single origin, only the first country listed is used, which is usually the primary producer. About 9% of rows have no country at all and get dropped from this figure. The genre tags in Netflix's own <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">listed_in</code> column are messy (one row might read "International TV Shows, TV Dramas, TV Mysteries"), so they get collapsed into ten broad buckets by keyword matching. A title can land in more than one bucket, and shares are calculated against the country's total title count, so the panel reads as roughly X-in-Y rather than raw tag counts.
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
          The US leads every genre bucket in absolute terms, with Drama, Comedy, and Documentary all featuring heavily across a pretty spread-out profile. Nothing about it is particularly distinctive. It's the catalog's dominant baseline.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Each major producer outside the US has its own genre fingerprint. Japan is the clearest case, with both its Movie and TV panels sitting heavily in Animation/Anime. No other country comes close to that share, and the Movies/TV toggle barely changes the picture because anime shows up across both formats. South Korea reads almost like two separate countries depending on the toggle. K-drama dominates the TV side, while the Movie side leans Thriller and Crime (<em>Train to Busan</em>, <em>The Call</em>, and <em>Burning</em> are good examples of that). The split is wide and holds consistently. India is heavily Drama- and Comedy-led on the Movie side with a much smaller TV footprint, which reflects Netflix India's earlier years relying on licensed Bollywood catalog before original series production picked up. The UK's TV side tilts toward Crime and Documentary more than its Movie side does. And Spain, Mexico, Brazil, and Turkey all share a similar shape: Drama and Romance up front, with Crime and Thriller close behind on the TV side.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Worth spending time on the Movies/TV toggle. For most countries, the Movie panel reflects what Netflix licensed from that market, while the TV panel is closer to what the country actually produces. Korea's gap between those two views is dramatic. Japan's barely shifts at all. India's tells you that Netflix is still leaning heavily on acquisition rather than original production for that market, at least through 2021.
        </p>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">What the data can't tell you</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          Catalog presence and cultural production are different things. A country with strong domestic streaming services, Japan with Hulu Japan or Korea with Tving and Wavve, may export only a fraction of what it actually makes. This map shows what Netflix carries from each country, which isn't a complete picture of what each country produces. That gap is worth keeping in mind for Japan and Korea in particular.
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
          Growth, geography, and audience targeting have been the first three angles. This chart looks at something harder to pin down: which parts of the catalog actually connect with people who watch it.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Both metrics come from The Movie Database (TMDB)<RefLink n={2} href="https://www.themoviedb.org" />, a community site where registered users rate and track titles. <strong className="text-white">Vote average</strong> is the mean of all user ratings on a 0–10 scale, crowdsourced votes from the TMDB community rather than critic scores. <strong className="text-white">Popularity</strong> works differently: TMDB recalculates it every day using votes cast, page views, favourites, watchlist additions, release timing, and the previous day's score<RefLink n={3} href="https://developer.themoviedb.org/docs/popularity-and-trending" />. It has no fixed ceiling and drops over time. A film that gets a re-release will spike, then gradually fall back. Popularity tracks TMDB engagement signals around a title; how many people actually watched it on Netflix is a separate question this score doesn't answer.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Raw popularity is extremely right-skewed. A handful of breakout titles score in the thousands while most sit near zero, so both axes use <code className="text-[#ccc] text-xs bg-[#2a2a2a] px-1 py-0.5 rounded">log1p(...)</code> to compress the range. That keeps ordinary titles visible without letting <em>Stranger Things</em> and <em>Wednesday</em> push everything else to the bottom of the plot. The trade-off is that differences on the chart are multiplicative rather than additive: a one-unit jump in log popularity corresponds to a much bigger jump in raw numbers.
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
          On the TV side, Anime, Documentary, and Crime sit highest on average rating, while Drama and Comedy come in a bit lower. That's probably a mix of two things: niche genres tend to attract audiences who already know they'll like the content, and the broad buckets include a lot of mediocre licensed titles that pull the mean down. Hard to separate those two effects from the data alone.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Action and Drama lead on average popularity, which tracks with where Netflix concentrates its globally marketed titles. Ratings and popularity point in different directions here. The genres with the highest average scores are rarely the ones drawing the most TMDB attention, and that disconnect is probably the most telling pattern in this whole chart.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          For the country breakdown, a minimum of 20 titles is required before a country appears, to filter out the statistical noise of single-entry outliers. With that threshold applied, South Korea, Japan, the UK, and Taiwan sit at the top on average rating. The United States lands somewhere in the middle despite producing the most titles by far, mostly because a catalog that large includes both acclaimed titles and a lot of ordinary licensed content, and the mean reflects all of it. India and Mexico land on the other side of that picture, with stronger average popularity but more middling ratings.
        </p>
        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">What the data can't tell you</h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          TMDB activity and Netflix viewership measure different things. A title with a big Netflix audience but little TMDB presence is basically invisible in this data. Coverage is also uneven: around 80% of TV Shows have TMDB scores, but only about 38% of Movies, so the country and genre comparisons hold up better on the TV side. Rating averages also flatten time. A fifteen-year-old classic and a two-year-old release with the same score look identical here, even though their actual reach and moment in time are completely different.
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
  {
    name: 'Lucas Patricio Martin Campopiano',
    id: 's250484',
    items: ['Design of the outline of all figures shown', 'Code and Analysis of Figure 3'],
  },
  {
    name: 'Levente Murgás',
    id: 's242957',
    items: ['Website development', 'Dataset merging and preprocessing', 'Code and Analysis of Figure 1'],
  },
  {
    name: 'Konstantinos Papadopoulos',
    id: 's250219',
    items: ['Code and Analysis of Figure 2', 'Code and Analysis of Figure 4'],
  },
];

const contributionCriteria =
  'The criteria we used for splitting workload depended on the amount of cumulative workload necessary for each person, because we wanted to distribute everything fairly. Additionally, every member is aware of and has contributed to others\u2019 tasks.';

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
          <div className="space-y-6">
            {contributions.map((c) => (
              <div key={c.id}>
                <p className="text-white text-sm md:text-base font-medium mb-1">
                  {c.name} <span className="text-[#666] font-normal">({c.id})</span>
                </p>
                <ul className="list-disc list-inside space-y-0.5">
                  {c.items.map((item) => (
                    <li key={item} className="text-[#A0A0A0] text-sm md:text-base">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-2">
              <p className="text-white text-sm md:text-base font-medium mb-1">Criteria</p>
              <p className="text-[#A0A0A0] text-sm md:text-base">{contributionCriteria}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
