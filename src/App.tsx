import { Timeline } from '@/components/ui/timeline';
import { Header } from '@/components/ui/header';
import { Lens } from '@/components/ui/lens';

const navLinks = [
  { label: 'Yearly Trends', href: '#checkpoint-0' },
  { label: 'Hourly Patterns', href: '#checkpoint-1' },
  { label: 'Category Shifts', href: '#checkpoint-2' },
  { label: 'Interactive Breakdown', href: '#checkpoint-3' },
  { label: 'Geographic Heatmap', href: '#checkpoint-4' },
];

const timelineData = [
  {
    title: 'Yearly Trends',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          Year-over-year crime trajectory reveals shifting patterns across major categories from 2020 to 2025.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)]">
          <Lens zoomFactor={2.5} lensSize={180}>
            <img
              src="/images/yearly_crime_trends.svg"
              alt="Yearly Crime Trends"
              className="w-full h-auto"
            />
          </Lens>
        </div>
      </div>
    ),
  },
  {
    title: 'Hourly Patterns',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          Crime activity peaks in late evening hours and drops sharply in early morning — a clear diurnal rhythm.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)]">
          <Lens zoomFactor={2.5} lensSize={180}>
            <img
              src="/images/hourly_crime_trends.svg"
              alt="Hourly Crime Trends"
              className="w-full h-auto"
            />
          </Lens>
        </div>
      </div>
    ),
  },
  {
    title: 'Category Shifts',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          Relative change per crime category highlights which offenses are surging and which are declining.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)]">
          <Lens zoomFactor={2.5} lensSize={180}>
            <img
              src="/images/relative_change_per_category.svg"
              alt="Relative Change Per Category"
              className="w-full h-auto"
            />
          </Lens>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Breakdown',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          Drill into hourly crime distributions by category — hover and filter for detailed insights.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)]">
          <iframe
            src="/visualizations/crime_hourly_interactive.html"
            title="Interactive Hourly Crime Chart"
            className="w-full border-0"
            style={{ height: '550px' }}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Geographic Heatmap',
    content: (
      <div>
        <p className="text-[#A0A0A0] text-sm md:text-base font-normal mb-6">
          Spatio-temporal heatmap reveals how prostitution-related incidents cluster and shift across neighborhoods.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1F1F1F] shadow-[0_0_30px_rgba(63,120,254,0.05)]">
          <iframe
            src="/visualizations/heatmap_with_time.html"
            title="Geographic Heatmap with Time Controls"
            className="w-full border-0"
            style={{ height: '700px' }}
          />
        </div>
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
