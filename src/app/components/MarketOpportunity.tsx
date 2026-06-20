import { TrendingUp, ShoppingCart, Sparkles, Target, Users } from 'lucide-react';

export default function MarketOpportunity() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Market Opportunity</h1>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl mb-6">Indian Cooking Market</h2>
        
        <div className="space-y-4 text-lg">
          <p className="flex items-start gap-3">
            <span className="text-3xl">🏠</span>
            <span className="text-gray-700">
              More than <span className="font-semibold text-[#6C2BD9]">80%</span> of Indian households cook at home daily.
            </span>
          </p>
          
          <p className="flex items-start gap-3">
            <span className="text-3xl">📱</span>
            <span className="text-gray-700">
              Many consumers search for recipes on <span className="font-semibold">YouTube, Instagram, or Google</span> before shopping.
            </span>
          </p>
          
          <p className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <span className="text-gray-700">
              This creates an opportunity for grocery apps to <span className="font-semibold text-green-600">integrate recipes directly</span> into the shopping experience.
            </span>
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl mb-6">Key Trends</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#6C2BD9] transition-colors">
            <ShoppingCart className="w-10 h-10 text-[#6C2BD9] mb-4" />
            <h3 className="font-semibold text-lg mb-2">Rising online grocery adoption</h3>
            <p className="text-sm text-gray-600">More customers shopping online</p>
          </div>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#6C2BD9] transition-colors">
            <Users className="w-10 h-10 text-[#6C2BD9] mb-4" />
            <h3 className="font-semibold text-lg mb-2">Increased interest in home cooking</h3>
            <p className="text-sm text-gray-600">Health and cost consciousness</p>
          </div>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#6C2BD9] transition-colors">
            <TrendingUp className="w-10 h-10 text-[#6C2BD9] mb-4" />
            <h3 className="font-semibold text-lg mb-2">Growth of quick commerce</h3>
            <p className="text-sm text-gray-600">Fast delivery becoming standard</p>
          </div>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#6C2BD9] transition-colors">
            <Sparkles className="w-10 h-10 text-[#6C2BD9] mb-4" />
            <h3 className="font-semibold text-lg mb-2">AI-powered shopping experiences</h3>
            <p className="text-sm text-gray-600">Smart recommendations & automation</p>
          </div>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#6C2BD9] transition-colors">
            <Target className="w-10 h-10 text-[#6C2BD9] mb-4" />
            <h3 className="font-semibold text-lg mb-2">Personalized recommendations</h3>
            <p className="text-sm text-gray-600">Tailored shopping suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
