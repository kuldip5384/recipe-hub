import { ShoppingCart, Filter, Users, BookmarkPlus } from 'lucide-react';

export default function FeatureWalkthrough() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Feature Walkthrough</h1>
      
      <div className="max-w-2xl mx-auto">
        {/* Recipe Card */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-xl overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-6 text-white">
            <h2 className="text-3xl mb-2">🧈 Malai Paneer</h2>
            <p className="text-sm text-white/90">Traditional North Indian curry</p>
          </div>
          
          {/* Ingredients */}
          <div className="p-6">
            <h3 className="text-xl mb-4">Ingredients</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Paneer - 250g
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Cream - 200ml
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Butter - 2 tbsp
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Onion - 2 pcs
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Tomato - 3 pcs
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-3 text-center">
                Cashews - 50g
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-[#00C853] hover:bg-green-600 text-white p-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add All Ingredients
              </button>
              
              <button className="w-full bg-purple-100 hover:bg-purple-200 text-[#6C2BD9] p-3 rounded-lg flex items-center justify-center gap-3 transition-colors">
                <Filter className="w-5 h-5" />
                Remove Items I Already Have
              </button>
              
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-lg flex items-center justify-center gap-3 transition-colors">
                <Users className="w-5 h-5" />
                Change Serving Size
              </button>
              
              <button className="w-full bg-pink-100 hover:bg-pink-200 text-pink-700 p-3 rounded-lg flex items-center justify-center gap-3 transition-colors">
                <BookmarkPlus className="w-5 h-5" />
                Save Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
