import { User, Building2, TrendingUp, Users, Heart, DollarSign, Repeat, Target } from 'lucide-react';

export default function BusinessBenefits() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Business Benefits</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* For Customers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl">For Customers</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Faster shopping</h3>
                  <p className="text-sm text-gray-600">Complete recipe shopping in seconds instead of minutes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-2xl">👨‍🍳</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Better cooking experience</h3>
                  <p className="text-sm text-gray-600">All ingredients ready, nothing missing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💪</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Less effort</h3>
                  <p className="text-sm text-gray-600">No need to search each ingredient separately</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">No forgotten ingredients</h3>
                  <p className="text-sm text-gray-600">Complete ingredient lists for every recipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Zepto */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-[#6C2BD9]" />
            <h2 className="text-2xl">For Grocery App</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-[#6C2BD9] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#6C2BD9] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Higher Average Order Value</h3>
                  <p className="text-sm text-gray-600">Customers buy complete ingredient sets</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-[#6C2BD9] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Repeat className="w-6 h-6 text-[#6C2BD9] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">More Repeat Customers</h3>
                  <p className="text-sm text-gray-600">Recipe hub creates habitual usage patterns</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-[#6C2BD9] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#6C2BD9] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Better User Engagement</h3>
                  <p className="text-sm text-gray-600">Customers spend more time exploring recipes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-[#6C2BD9] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-[#6C2BD9] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Increased Revenue</h3>
                  <p className="text-sm text-gray-600">Higher cart values drive revenue growth</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-[#6C2BD9] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-[#6C2BD9] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Higher Customer Retention</h3>
                  <p className="text-sm text-gray-600">Unique feature builds customer loyalty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
