import { TrendingUp, DollarSign } from 'lucide-react';

export default function RevenueImpact() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Revenue Impact</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-10 h-10 text-green-600" />
            <h2 className="text-2xl">Projected Revenue Growth</h2>
          </div>
          
          {/* Calculation Flow */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Daily Orders</p>
                  <p className="text-3xl font-semibold text-gray-800">100,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Average Order Value</p>
                  <p className="text-3xl font-semibold text-gray-800">₹450</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-[#6C2BD9] text-white px-6 py-3 rounded-full text-lg font-semibold">
                Recipe Hub increases AOV by 12%
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-green-400">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New Average Order Value</span>
                  <span className="text-2xl font-semibold text-green-600">₹504</span>
                </div>
                
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Extra Revenue per Order</span>
                    <span className="text-2xl font-semibold text-green-600">₹54</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 border-2 border-green-500">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold">Revenue Increase</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-gray-700">Daily Revenue Increase</span>
                    <span className="font-semibold text-green-700">
                      ₹54 × 100,000 = <span className="text-2xl">₹54 lakh</span>
                    </span>
                  </div>
                  
                  <div className="border-t-2 border-green-300 pt-3 mt-3">
                    <div className="flex items-center justify-between text-xl">
                      <span className="text-gray-800 font-semibold">Monthly Increase</span>
                      <span className="font-bold text-green-600 text-3xl">₹16.2 crore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 rounded p-4">
            <p className="text-sm text-gray-700 italic">
              <span className="font-semibold">Note:</span> These are illustrative estimates for the case study, 
              not actual Zepto financial figures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
