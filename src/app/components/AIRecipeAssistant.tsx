import { Sparkles, ArrowDown, ShoppingCart } from 'lucide-react';

export default function AIRecipeAssistant() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">AI Recipe Assistant</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-8">
          {/* User Input */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-[#6C2BD9]" />
              <h3 className="text-xl">User types:</h3>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-inner">
              <p className="text-lg italic text-gray-700">
                "I have paneer, onion and tomato."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-10 h-10 text-[#6C2BD9] animate-bounce" />
          </div>
          
          {/* AI Suggestions */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl">AI suggests:</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-purple-300 rounded-lg p-4 hover:border-purple-500 transition-colors">
                <h4 className="font-semibold text-lg mb-2">🧈 Paneer Butter Masala</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Paneer</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Onion</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Tomato</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Butter</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Cream</span>
                </div>
              </div>
              
              <div className="bg-white border-2 border-purple-300 rounded-lg p-4 hover:border-purple-500 transition-colors">
                <h4 className="font-semibold text-lg mb-2">🌶️ Kadai Paneer</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Paneer</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Onion</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Tomato</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Bell Pepper</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Spices</span>
                </div>
              </div>
              
              <div className="bg-white border-2 border-purple-300 rounded-lg p-4 hover:border-purple-500 transition-colors">
                <h4 className="font-semibold text-lg mb-2">👑 Shahi Paneer</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Paneer</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Onion</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Tomato</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Cashews</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">+ Cream</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 italic">
              Missing ingredients appear automatically.
            </p>
          </div>
          
          <div className="flex justify-center mb-6">
            <ArrowDown className="w-10 h-10 text-[#6C2BD9]" />
          </div>
          
          {/* Action */}
          <div className="text-center">
            <button className="bg-[#00C853] hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg flex items-center gap-3 mx-auto transition-colors shadow-lg">
              <ShoppingCart className="w-6 h-6" />
              Add Missing Ingredients
            </button>
            <p className="text-sm text-gray-600 mt-3">One tap to complete your recipe!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
