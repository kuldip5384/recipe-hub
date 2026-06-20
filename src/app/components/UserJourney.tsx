import { ArrowDown } from 'lucide-react';

export default function UserJourney() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">User Journey</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Current Journey */}
        <div>
          <h2 className="text-2xl mb-6 text-red-600">Current Journey</h2>
          
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="space-y-3">
              <div className="bg-white border border-red-300 rounded-lg p-4 text-center">
                <p className="font-semibold">Home</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-red-200 border border-red-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Search Paneer</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-red-200 border border-red-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Search Butter</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-red-200 border border-red-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Search Cream</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-red-200 border border-red-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Search Onion</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-red-200 border border-red-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Search Tomato</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="bg-gray-700 text-white rounded-lg p-4 text-center">
                <p className="font-semibold">Checkout</p>
              </div>
            </div>
            
            <p className="mt-6 text-red-700 font-semibold text-center">
              ❌ Too many steps, frustrating experience
            </p>
          </div>
        </div>
        
        {/* Proposed Journey */}
        <div>
          <h2 className="text-2xl mb-6 text-green-600">Proposed Journey</h2>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="space-y-3">
              <div className="bg-white border border-green-300 rounded-lg p-4 text-center">
                <p className="font-semibold">Home</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="bg-[#6C2BD9] text-white rounded-lg p-4 text-center">
                <p className="font-semibold">Recipe Hub</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="bg-purple-200 border border-purple-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Choose Recipe</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="bg-purple-200 border border-purple-400 rounded-lg p-4 text-center">
                <p className="font-semibold">Review Ingredients</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="bg-[#00C853] text-white rounded-lg p-4 text-center">
                <p className="font-semibold">Add All to Cart</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="bg-gray-700 text-white rounded-lg p-4 text-center">
                <p className="font-semibold">Checkout</p>
              </div>
            </div>
            
            <p className="mt-6 text-green-700 font-semibold text-center">
              ✅ Simple, fast, and efficient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
