import { ArrowDown } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Executive Summary</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Current Situation */}
        <div className="space-y-4">
          <h2 className="text-2xl mb-4">Current Situation</h2>
          <p className="text-gray-700 mb-6">
            Customers spend time searching every ingredient individually while shopping for recipes.
          </p>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="mb-4">
              For example, a customer wants to cook <span className="font-semibold">Malai Paneer</span>
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Paneer</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Cream</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Butter</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Onion</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Tomato</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded">Search Cashews</div>
              </div>
              <ArrowDown className="w-4 h-4 text-red-500 ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 text-white px-3 py-1 rounded">Checkout</div>
              </div>
            </div>
            
            <p className="mt-6 text-red-700 italic">
              The process is slow and users often forget ingredients.
            </p>
          </div>
        </div>
        
        {/* Proposed Solution */}
        <div className="space-y-4">
          <h2 className="text-2xl mb-4">Proposed Solution</h2>
          <p className="text-gray-700 mb-6">
            Introduce a new category called <span className="font-semibold text-[#6C2BD9]">Recipe Hub</span>
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="mb-4">
              Customers can:
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-[#6C2BD9] text-white px-3 py-1 rounded">Choose Recipe</div>
              </div>
              <ArrowDown className="w-4 h-4 text-[#6C2BD9] ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-[#6C2BD9] text-white px-3 py-1 rounded">Review Ingredients</div>
              </div>
              <ArrowDown className="w-4 h-4 text-[#6C2BD9] ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-[#00C853] text-white px-3 py-1 rounded">Add All Ingredients</div>
              </div>
              <ArrowDown className="w-4 h-4 text-[#6C2BD9] ml-2" />
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 text-white px-3 py-1 rounded">Checkout</div>
              </div>
            </div>
            
            <p className="mt-6 text-green-700 font-semibold">
              ✓ Everything happens in one tap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
