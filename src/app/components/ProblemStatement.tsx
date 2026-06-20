import { X } from 'lucide-react';

export default function ProblemStatement() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Existing Shopping Experience</h1>
      
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-8">
        <p className="text-lg mb-6">
          Imagine a customer wants to prepare <span className="font-semibold text-[#6C2BD9]">Paneer Butter Masala</span>.
        </p>
        
        <p className="text-gray-700 mb-4">The customer has to:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Paneer</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Butter</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Cream</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Onion</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Tomato</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Garlic</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Ginger</div>
          <div className="bg-white p-3 rounded border border-gray-300 text-center">Search Spices</div>
        </div>
        
        <p className="text-red-600 font-semibold italic">
          This process is repetitive and frustrating.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl mb-6">Major Problems</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-red-700">Too many searches</p>
                <p className="text-sm text-gray-600 mt-1">Multiple individual searches required</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-red-700">Time consuming</p>
                <p className="text-sm text-gray-600 mt-1">Slow and tedious process</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-red-700">Users forget ingredients</p>
                <p className="text-sm text-gray-600 mt-1">Incomplete shopping lists</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-red-700">Higher cart abandonment</p>
                <p className="text-sm text-gray-600 mt-1">Users give up mid-process</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-red-700">Poor cooking experience</p>
                <p className="text-sm text-gray-600 mt-1">Missing ingredients ruin meals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
