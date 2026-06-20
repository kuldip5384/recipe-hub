import { Check, ChefHat, Search, Heart, ShoppingCart, Sparkles, Calendar, Apple } from 'lucide-react';

export default function SolutionOverview() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Solution Overview</h1>
      
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <ChefHat className="w-12 h-12 text-[#6C2BD9]" />
          <h2 className="text-3xl">Recipe Hub</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          A dedicated section where customers can:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/70 rounded-lg p-4">
            <Search className="w-6 h-6 text-[#6C2BD9]" />
            <span>Browse recipes</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/70 rounded-lg p-4">
            <Search className="w-6 h-6 text-[#6C2BD9]" />
            <span>Search recipes</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/70 rounded-lg p-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span>Save favourites</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/70 rounded-lg p-4">
            <ShoppingCart className="w-6 h-6 text-[#00C853]" />
            <span>Add ingredients instantly</span>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl mb-6">Key Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">One-click Add to Cart</h3>
                <p className="text-sm text-gray-600">Add all recipe ingredients with a single tap</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Serving Size Adjustment</h3>
                <p className="text-sm text-gray-600">Automatically adjust quantities for any number of people</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">AI Recommendations</h3>
                <p className="text-sm text-gray-600">Smart recipe suggestions based on available ingredients</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Meal Planner</h3>
                <p className="text-sm text-gray-600">Plan weekly meals and generate shopping lists</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Apple className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Nutrition Information</h3>
                <p className="text-sm text-gray-600">View nutritional details for each recipe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
