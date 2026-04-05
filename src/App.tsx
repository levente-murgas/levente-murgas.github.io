import { Timeline } from '@/components/ui/timeline';
import { Header } from '@/components/ui/header';
import { Lens } from '@/components/ui/lens';

const navLinks = [
  { label: 'District Crime Heatmap', href: '#checkpoint-0' },
  { label: 'Drug Crime Geography', href: '#checkpoint-1' },
  { label: 'Drug Types Over Time', href: '#checkpoint-2' },
];

const timelineData = [
  {
    title: 'District Crime Heatmap',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          We use a heatmap to visualize differences in crime patterns across San Francisco districts. This representation allows us to assess whether crime is evenly distributed across the city and to identify how different types of offenses vary across districts.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)] mb-6">
          <Lens zoomFactor={2.5} lensSize={180}>
            <img
              src="/images/heatmap.png"
              alt="Heatmap of crime rates by district"
              className="w-full h-auto"
            />
          </Lens>
        </div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          As shown in the heatmap, several districts exhibit elevated levels of property related crimes such as burglary, larceny theft, and motor vehicle theft. For example, Southern and Northern districts display higher than average rates in these categories. In contrast, other districts show more balanced profiles, with crime rates closer to the city average across multiple categories.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The heatmap also highlights differences between violent and property crimes across districts. Districts such as Bayview and Mission show relatively higher levels of assault and robbery, while districts like Northern and Southern are more dominated by theft related offenses such as larceny and burglary. These contrasts indicate that different districts exhibit distinct crime profiles rather than a uniform pattern across the city.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Against this broader backdrop, one district stands out clearly. The <strong className="text-white">Tenderloin</strong> shows a particularly strong concentration of drug related offenses, reaching more than four times the city average. At the same time, it exhibits lower than average levels of crimes such as burglary, vandalism, and motor vehicle theft.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          This distinct combination highlights a unique crime profile compared to other districts, where drug related activity is highly concentrated while property related crimes are relatively less prevalent.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The patterns observed in the heatmap can also be considered in light of broader developments in San Francisco during this period. Over the past two decades, the city has experienced significant shifts in policing strategies, public policy, and social conditions.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Changes in policing approaches, including periods of reduced enforcement and later efforts to increase police presence in high activity areas, may have influenced how crime is recorded and where it is concentrated. The appointment of new police leadership and shifts in policy priorities have also shaped enforcement strategies across the city, with particularly visible effects in neighborhoods such as the Tenderloin.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          At the same time, San Francisco has faced growing challenges related to homelessness, housing affordability, and the concentration of social services in specific areas. While these factors affect the city more broadly, the Tenderloin has long been a focal point for many of these issues, which may contribute to the visibility and persistence of drug related activity in the district.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          This concentration of drug related crime in the Tenderloin stands out as a key insight in the data and motivates a more focused spatial analysis. In the next section, we examine how these patterns extend beyond the district itself and how crime is distributed across the surrounding areas.
        </p>
      </div>
    ),
  },
  {
    title: 'Drug Crime Geography',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          After seeing that Tenderloin has significantly higher rates of drug offenses compared to other districts, we became interested in whether every part of Tenderloin is equally affected by drug offenses, or if there are specific hotspots. To this end, we created a heatmap over time, that shows how drug related incidents are distributed both spatially and temporally across Tenderloin and its neighboring districts (Northern, Central and Southern).
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)] mb-6">
          <iframe
            src="/visualizations/heatmap_with_time_sum.html"
            title="Heatmap with Time Controls"
            className="w-full border-0"
            style={{ height: '550px' }}
          />
        </div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The line chart in the bottom right shows Tenderloin's yearly incident count (orange) alongside the combined total for Northern, Central, and Southern districts (grey). Grouping those three districts into a single N+C+S line makes the comparison easier to read: for much of the 22-year period, the Tenderloin on its own keeps pace with, and in many years surpasses, all three of them put together. It puts a number to what the heatmap already shows spatially, that drug activity was packed into a very small area.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          A key geographical finding is that the Tenderloin is a relatively small district compared to its neighbors. Because the entire district consists of only a few city blocks, high crime rates affect the neighborhood uniformly. This is reflected in the heatmap, where the Tenderloin appears as a "throbbing" red core consistently across the 22-year data span.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          The "Containment Zone" and Border Spillover
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          While the Tenderloin is the epicenter, the heatmap reveals that crime does not respect administrative boundaries. High-density "hotspots" are visible along the borders of neighboring districts. Historically, this is attributed to the "containment zone" policy.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          As noted by local journal BeyondChron, starting in the 1960s, San Francisco used the Tenderloin to contain open drug dealing and public use to prevent it from spreading to more affluent areas like Union Square or the Marina. However the heatmap proves that as much as "love knows no bounds", neither do crimes, and the spillover into the Southern (SoMa) and Central districts is still significant, particularly during peak enforcement years.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          The 2008–2009 Peak: Policy vs. Reality
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          If we wanted to understand the massive spike during 2008-2009 in incidents, we first have to understand the nature of this data. Drug crime statistics often tell a story of police strategy rather than just the amount of drugs on the street.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The primary driver of the spike in 2009 was the arrival of George Gascón as Police Chief in August 2009. Coming from the LAPD, Gascón was reportedly "shocked" by the open-air drug markets in the Tenderloin. Gascón immediately launched aggressive "buy-and-bust" operations and "hot-spot" policing. In the fall of 2009, arrests skyrocketed as units specialized in undercover narcotics sweeps crisscrossed the neighborhood. This created a massive, artificial peak in "drug offense" data because the police were finally recording and arresting for behavior they had previously ignored.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The line chart backs this up: the N+C+S sum rises and falls in step with Tenderloin across 2008 and 2009. Central hit a high of 274 incidents in 2008, and Southern (SoMa) jumped to 1,348 that same year, which together pushed the combined total to its own peak. The timing across all three neighboring districts points to a city-wide enforcement shift rather than something specific to the Tenderloin, most likely tied to Gascón's arrival and the crackdown he brought with him.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          The Resurgence (2022–2025)
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          After a decade of lower activity (bottoming out in 2017), the heatmap shows a dramatic resurgence starting in 2022. This second "wave" is driven by several new factors.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Mayor London Breed declared a state of emergency to "take back the Tenderloin," prioritizing accountability over tolerance. Also in 2023, Mayor Breed launched the Drug Market Agency Coordination Center (DMACC), a task force targeting open-air drug markets in the Tenderloin and SoMa. It brought together local, state, and federal agencies for intensive operations, resulting in over 3,000 arrests and close to 200 kilos of narcotics seized in its first year, fentanyl included. The California Highway Patrol (CHP) and the U.S. Attorney's "All Hands on Deck" initiative added to that arrest count. Unlike 2009, though, this wave was driven by the fentanyl crisis. The drug is potent enough that open-air markets became impossible for the city to ignore politically.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          The Tenderloin drug data tells a cyclical story: when the "containment" of drug activity becomes politically or socially unbearable (as in 2009 and 2022), the city pivots to aggressive enforcement, creating visible spikes in crime data.
        </p>
      </div>
    ),
  },
  {
    title: 'Drug Types Over Time',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          For the last part of the analysis, we took the dataset and narrowed it down to Tenderloin drug offenses, filtering by crime category, police district, and date. Each incident's free-text description was then run through a keyword classifier that assigned one of eight drug categories. From there, the records were counted up by year and category to get the numbers behind the stacked area chart.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)] mb-6">
          <iframe
            src="/visualizations/drug_offense_by_type_tenderloin.html"
            title="Drug Offense by Type in Tenderloin"
            className="w-full border-0"
            style={{ height: '550px' }}
          />
        </div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Two peaks jump out. The first, in 2009, lines up with SFPD Chief George Gascón's arrival and his push for aggressive buy-and-bust operations. Crack cocaine arrests were the main driver of that spike. The second uptick, which starts around 2022, looks quite different in composition: heroin/opiate and paraphernalia incidents make up most of the increase, tying into the fentanyl crisis and Mayor Breed's emergency declaration. Worth keeping in mind: the data captures enforcement activity, not drug use. Higher counts can just as easily mean more arrests as more crime.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          Each visible pattern in the chart corresponds to a documented real-world event or enforcement shift:
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          2003–2010 — Crack cocaine dominance
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The thick red band in the chart makes it pretty clear the Tenderloin was overwhelmingly crack-dominated during this stretch. Numerically, crack cocaine made up roughly 55–65% of all categorised incidents in the peak years. That lines up with the broader crack cocaine trend across the US during the 2000s.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          2009 spike — Gascón's buy-and-bust campaign
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The spike across nearly every category can be traced back to the buy-and-bust operations running at the time. All drug types rise together, which is what you'd expect from a surge in aggressive policing rather than an actual increase in drug use.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          2017 trough — Deprioritised enforcement
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          The low numbers here say more about police priorities than the actual state of drug activity in the neighbourhood. Officers weren't bothering with drug arrests because suspects would simply be back on the street shortly after, with little accountability from the courts.
        </p>

        <h4 className="text-white text-sm md:text-lg font-semibold mt-6 mb-3">
          2018–2025 — Fentanyl crisis and shifting composition
        </h4>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-4">
          From around 2018 onward, heroin/opiates take the top spot from crack cocaine and stay there. This tracks with the broader fentanyl crisis playing out across the US, and in San Francisco in particular, where the mayor declared a state of emergency in the Tenderloin.
        </p>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal">
          The uptick in paraphernalia arrests likely reflects officers picking up people carrying drug-related equipment, whether that meant suspected users or dealers.
        </p>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#191919' }}>
      <Header links={navLinks} />
      <div className="pt-16">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}

export default App;
