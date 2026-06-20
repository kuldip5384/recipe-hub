import { Calendar, ShoppingCart } from 'lucide-react';

export default function MealPlanner() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Weekly Meal Planner</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-[#6C2BD9]" />
            <h2 className="text-2xl">Plan Your Week</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Monday */}
            <div className="bg-white border-2 border-red-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-red-600">Monday</span>
                <span className="text-2xl">🍛</span>
              </div>
              <p className="text-lg font-semibold">Rajma</p>
              <p className="text-sm text-gray-600 mt-1">Kidney bean curry</p>
            </div>
            
            {/* Tuesday */}
            <div className="bg-white border-2 border-orange-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-orange-600">Tuesday</span>
                <span className="text-2xl">🧈</span>
              </div>
              <p className="text-lg font-semibold">Paneer</p>
              <p className="text-sm text-gray-600 mt-1">Paneer butter masala</p>
            </div>
            
            {/* Wednesday */}
            <div className="bg-white border-2 border-yellow-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-yellow-600">Wednesday</span>
                <span className="text-2xl">🍝</span>
              </div>
              <p className="text-lg font-semibold">Pasta</p>
              <p className="text-sm text-gray-600 mt-1">Italian pasta</p>
            </div>
            
            {/* Thursday */}
            <div className="bg-white border-2 border-green-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-green-600">Thursday</span>
                <span className="text-2xl">🥘</span>
              </div>
              <p className="text-lg font-semibold">Dal</p>
              <p className="text-sm text-gray-600 mt-1">Yellow lentils</p>
            </div>
            
            {/* Friday */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-blue-600">Friday</span>
                <span className="text-2xl">🍚</span>
              </div>
              <p className="text-lg font-semibold">Biryani</p>
              <p className="text-sm text-gray-600 mt-1">Fragrant rice dish</p>
            </div>
            
            {/* Weekend */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-purple-600">Weekend</span>
                <span className="text-2xl">🎉</span>
              </div>
              <p className="text-lg font-semibold">Eat Out</p>
              <p className="text-sm text-gray-600 mt-1">Enjoy restaurant food</p>
            </div>
          </div>
          
          <div className="bg-[#6C2BD9] text-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl">Smart Shopping List</h3>
              <ShoppingCart className="w-6 h-6" />
            </div>
            <p className="text-white/90 mb-4">
              The app creates a single grocery list for the entire week, combining all ingredients and removing duplicates.
            </p>
            <button className="bg-white text-[#6C2BD9] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Generate Weekly Shopping List
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg text-green-600 font-semibold">
              ✨ Shop once, eat all week!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
