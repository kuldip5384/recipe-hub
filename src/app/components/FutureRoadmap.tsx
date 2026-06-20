import { Sparkles, Mic, Video, Gift, Heart, ShoppingBag } from 'lucide-react';

export default function FutureRoadmap() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Future Roadmap</h1>
      
      <p className="text-lg text-gray-700 mb-10">Exciting features planned for Recipe Hub evolution</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Chef */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">AI Chef</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            Personalized recipe recommendations based on preferences, diet, and past orders
          </p>
          <div className="text-center">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q3 2026
            </span>
          </div>
        </div>
        
        {/* Voice Search */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Mic className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Voice Search</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            "Hey Zepto, show me easy paneer recipes" - hands-free recipe discovery
          </p>
          <div className="text-center">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q4 2026
            </span>
          </div>
        </div>
        
        {/* Video Recipes */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Video Recipes</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            Step-by-step cooking videos integrated with ingredient shopping
          </p>
          <div className="text-center">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q1 2027
            </span>
          </div>
        </div>
        
        {/* Festival Meal Kits */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Festival Meal Kits</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            Pre-packaged ingredient kits for Diwali, Holi, Christmas special recipes
          </p>
          <div className="text-center">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q2 2027
            </span>
          </div>
        </div>
        
        {/* Health Goals */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Health Goals</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            Filter recipes by nutrition: low-carb, high-protein, diabetic-friendly
          </p>
          <div className="text-center">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q3 2027
            </span>
          </div>
        </div>
        
        {/* Smart Shopping Lists */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-300 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Smart Shopping Lists</h3>
          <p className="text-sm text-gray-700 text-center mb-3">
            AI predicts pantry needs and suggests refills based on cooking patterns
          </p>
          <div className="text-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
              Q4 2027
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-10 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-6 text-center">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">Vision:</span> Make Recipe Hub the most comprehensive cooking & shopping platform in India
        </p>
      </div>
    </div>
  );
}
