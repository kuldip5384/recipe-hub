import { ArrowDown, Users } from 'lucide-react';

export default function ServingSize() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Serving Size Adjustment</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-8">
          <div className="space-y-6">
            {/* 2 People */}
            <div className="bg-white rounded-lg p-6 border-2 border-blue-400">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-xl font-semibold">2 People</span>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Selected</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-blue-50 p-2 rounded text-center">Paneer: 125g</div>
                <div className="bg-blue-50 p-2 rounded text-center">Cream: 100ml</div>
                <div className="bg-blue-50 p-2 rounded text-center">Butter: 1 tbsp</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9]" />
            </div>
            
            <div className="text-center py-3">
              <p className="text-lg text-gray-600 italic">Ingredients update automatically</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9]" />
            </div>
            
            {/* 4 People */}
            <div className="bg-white rounded-lg p-6 border-2 border-purple-400">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="text-xl font-semibold">4 People</span>
                </div>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Selected</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-purple-50 p-2 rounded text-center">Paneer: 250g</div>
                <div className="bg-purple-50 p-2 rounded text-center">Cream: 200ml</div>
                <div className="bg-purple-50 p-2 rounded text-center">Butter: 2 tbsp</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9]" />
            </div>
            
            <div className="text-center py-3">
              <p className="text-lg text-gray-600 italic">Ingredients increase again</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9]" />
            </div>
            
            {/* 6 People */}
            <div className="bg-white rounded-lg p-6 border-2 border-green-400">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="text-xl font-semibold">6 People</span>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Selected</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded text-center">Paneer: 375g</div>
                <div className="bg-green-50 p-2 rounded text-center">Cream: 300ml</div>
                <div className="bg-green-50 p-2 rounded text-center">Butter: 3 tbsp</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl text-[#00C853] font-semibold">
              ✨ No manual calculation required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
