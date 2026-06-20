import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import CoverPage from './components/CoverPage';
import ExecutiveSummary from './components/ExecutiveSummary';
import AboutZepto from './components/AboutZepto';
import ProblemStatement from './components/ProblemStatement';
import MarketOpportunity from './components/MarketOpportunity';
import UserPersonas from './components/UserPersonas';
import UserJourney from './components/UserJourney';
import SolutionOverview from './components/SolutionOverview';
import FeatureWalkthrough from './components/FeatureWalkthrough';
import ServingSize from './components/ServingSize';
import AIRecipeAssistant from './components/AIRecipeAssistant';
import MealPlanner from './components/MealPlanner';
import BusinessBenefits from './components/BusinessBenefits';
import RevenueImpact from './components/RevenueImpact';
import KPIDashboard from './components/KPIDashboard';
import ABTesting from './components/ABTesting';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import DatabaseDesign from './components/DatabaseDesign';
import FutureRoadmap from './components/FutureRoadmap';
import SWOTAnalysis from './components/SWOTAnalysis';
import WhyZepto from './components/WhyZepto';
import AboutAuthor from './components/AboutAuthor';
import ThankYou from './components/ThankYou';

const pages = [
  { id: 0, component: CoverPage, title: 'Cover' },
  { id: 1, component: ExecutiveSummary, title: 'Executive Summary' },
  { id: 2, component: AboutZepto, title: 'About Zepto' },
  { id: 4, component: MarketOpportunity, title: 'Market Opportunity' },
  { id: 5, component: UserPersonas, title: 'User Personas' },
  { id: 7, component: SolutionOverview, title: 'Solution Overview' },
  { id: 8, component: FeatureWalkthrough, title: 'Feature Walkthrough' },
  { id: 9, component: ServingSize, title: 'Serving Size' },
  { id: 10, component: AIRecipeAssistant, title: 'AI Recipe Assistant' },
  { id: 11, component: MealPlanner, title: 'Weekly Meal Planner' },
  { id: 12, component: BusinessBenefits, title: 'Business Benefits' },
  { id: 15, component: ABTesting, title: 'A/B Testing' },
  { id: 18, component: FutureRoadmap, title: 'Future Roadmap' },
  { id: 21, component: AboutAuthor, title: 'About the Author' },
  { id: 22, component: ThankYou, title: 'Thank You' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToHome = () => {
    setCurrentPage(0);
  };

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <CurrentComponent />
        </div>

        {/* Navigation Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={goToHome}
              className="p-3 bg-[#6C2BD9] text-white rounded-lg shadow hover:shadow-md transition-all"
              title="Go to Cover"
            >
              <Home className="w-5 h-5" />
            </button>
            <span className="text-gray-600">
              Page {currentPage + 1} of {pages.length}
            </span>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {pages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentPage ? 'bg-[#6C2BD9] w-8' : 'bg-gray-300'
              }`}
              title={page.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
