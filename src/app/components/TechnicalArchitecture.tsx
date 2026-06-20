import { ArrowDown } from 'lucide-react';

export default function TechnicalArchitecture() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Technical Architecture</h1>
      
      <p className="text-lg text-gray-700 mb-10">System flow from user interaction to payment</p>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-xl p-8">
          <div className="space-y-4">
            {/* User */}
            <div className="bg-blue-500 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">👤</div>
              <p className="text-xl font-semibold">User</p>
              <p className="text-sm text-blue-100 mt-1">Browses recipes</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9] animate-bounce" />
            </div>
            
            {/* Recipe API */}
            <div className="bg-purple-500 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">🔌</div>
              <p className="text-xl font-semibold">Recipe API</p>
              <p className="text-sm text-purple-100 mt-1">Fetches recipe data</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9] animate-bounce" />
            </div>
            
            {/* Ingredient Database */}
            <div className="bg-green-500 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">🗄️</div>
              <p className="text-xl font-semibold">Ingredient Database</p>
              <p className="text-sm text-green-100 mt-1">Retrieves ingredient details</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9] animate-bounce" />
            </div>
            
            {/* Inventory */}
            <div className="bg-orange-500 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">📦</div>
              <p className="text-xl font-semibold">Inventory</p>
              <p className="text-sm text-orange-100 mt-1">Checks product availability</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9] animate-bounce" />
            </div>
            
            {/* Shopping Cart */}
            <div className="bg-pink-500 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">🛒</div>
              <p className="text-xl font-semibold">Shopping Cart</p>
              <p className="text-sm text-pink-100 mt-1">Adds ingredients to cart</p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#6C2BD9] animate-bounce" />
            </div>
            
            {/* Payment */}
            <div className="bg-[#00C853] text-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">💳</div>
              <p className="text-xl font-semibold">Payment</p>
              <p className="text-sm text-green-100 mt-1">Processes order & delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
