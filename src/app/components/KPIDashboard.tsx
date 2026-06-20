import { Eye, ShoppingCart, TrendingUp, DollarSign, Package, Repeat, Users, Heart } from 'lucide-react';

export default function KPIDashboard() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">KPI Dashboard</h1>
      
      <p className="text-lg text-gray-700 mb-8">Key Performance Indicators to Track Recipe Hub Success</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Recipe Views */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Eye className="w-8 h-8 text-blue-600" />
            <span className="text-xs text-blue-600 font-semibold bg-blue-200 px-2 py-1 rounded">ENGAGEMENT</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Recipe Views</h3>
          <p className="text-3xl font-bold text-blue-900">45.2K</p>
          <p className="text-xs text-blue-700 mt-2">↑ 23% from last week</p>
        </div>
        
        {/* Add-to-Cart Rate */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <ShoppingCart className="w-8 h-8 text-purple-600" />
            <span className="text-xs text-purple-600 font-semibold bg-purple-200 px-2 py-1 rounded">CONVERSION</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Add-to-Cart Rate</h3>
          <p className="text-3xl font-bold text-purple-900">68%</p>
          <p className="text-xs text-purple-700 mt-2">↑ 12% improvement</p>
        </div>
        
        {/* Recipe Conversion Rate */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <span className="text-xs text-green-600 font-semibold bg-green-200 px-2 py-1 rounded">CONVERSION</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Recipe Conversion</h3>
          <p className="text-3xl font-bold text-green-900">42%</p>
          <p className="text-xs text-green-700 mt-2">Views → Purchases</p>
        </div>
        
        {/* Average Order Value */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <DollarSign className="w-8 h-8 text-yellow-600" />
            <span className="text-xs text-yellow-600 font-semibold bg-yellow-200 px-2 py-1 rounded">REVENUE</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Avg Order Value</h3>
          <p className="text-3xl font-bold text-yellow-900">₹504</p>
          <p className="text-xs text-yellow-700 mt-2">↑ ₹54 vs baseline</p>
        </div>
        
        {/* Cart Size */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Package className="w-8 h-8 text-pink-600" />
            <span className="text-xs text-pink-600 font-semibold bg-pink-200 px-2 py-1 rounded">BASKET</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Cart Size</h3>
          <p className="text-3xl font-bold text-pink-900">8.5</p>
          <p className="text-xs text-pink-700 mt-2">items per order</p>
        </div>
        
        {/* Repeat Purchase Rate */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Repeat className="w-8 h-8 text-indigo-600" />
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-200 px-2 py-1 rounded">RETENTION</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Repeat Purchase</h3>
          <p className="text-3xl font-bold text-indigo-900">34%</p>
          <p className="text-xs text-indigo-700 mt-2">Weekly return rate</p>
        </div>
        
        {/* User Retention */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-8 h-8 text-teal-600" />
            <span className="text-xs text-teal-600 font-semibold bg-teal-200 px-2 py-1 rounded">RETENTION</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">User Retention</h3>
          <p className="text-3xl font-bold text-teal-900">76%</p>
          <p className="text-xs text-teal-700 mt-2">30-day retention</p>
        </div>
        
        {/* Customer Satisfaction */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Heart className="w-8 h-8 text-red-600" />
            <span className="text-xs text-red-600 font-semibold bg-red-200 px-2 py-1 rounded">SATISFACTION</span>
          </div>
          <h3 className="text-sm text-gray-700 mb-1">Customer Satisfaction</h3>
          <p className="text-3xl font-bold text-red-900">4.7/5</p>
          <p className="text-xs text-red-700 mt-2">Recipe Hub rating</p>
        </div>
      </div>
    </div>
  );
}
