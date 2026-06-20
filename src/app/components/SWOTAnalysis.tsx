export default function SWOTAnalysis() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">SWOT Analysis</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl">
              💪
            </div>
            <h2 className="text-2xl font-semibold text-green-800">Strengths</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white border border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Better shopping experience</h3>
              <p className="text-sm text-gray-700">Streamlined process saves time and effort</p>
            </div>
            
            <div className="bg-white border border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Higher order value</h3>
              <p className="text-sm text-gray-700">Customers buy complete ingredient sets</p>
            </div>
            
            <div className="bg-white border border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Unique differentiation</h3>
              <p className="text-sm text-gray-700">First mover advantage in recipe integration</p>
            </div>
            
            <div className="bg-white border border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Customer loyalty</h3>
              <p className="text-sm text-gray-700">Creates habitual usage patterns</p>
            </div>
          </div>
        </div>
        
        {/* Weaknesses */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-2xl">
              ⚠️
            </div>
            <h2 className="text-2xl font-semibold text-yellow-800">Weaknesses</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white border border-yellow-300 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-1">Requires recipe database</h3>
              <p className="text-sm text-gray-700">Need extensive recipe content library</p>
            </div>
            
            <div className="bg-white border border-yellow-300 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-1">Initial development cost</h3>
              <p className="text-sm text-gray-700">Investment in platform development needed</p>
            </div>
            
            <div className="bg-white border border-yellow-300 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-1">Content maintenance</h3>
              <p className="text-sm text-gray-700">Regular updates and quality checks required</p>
            </div>
            
            <div className="bg-white border border-yellow-300 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-1">User education</h3>
              <p className="text-sm text-gray-700">Customers need to discover and learn feature</p>
            </div>
          </div>
        </div>
        
        {/* Opportunities */}
        <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
              🚀
            </div>
            <h2 className="text-2xl font-semibold text-blue-800">Opportunities</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Differentiate from competitors</h3>
              <p className="text-sm text-gray-700">Stand out in crowded quick-commerce market</p>
            </div>
            
            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Cross-selling opportunities</h3>
              <p className="text-sm text-gray-700">Suggest complementary products and utensils</p>
            </div>
            
            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Brand partnerships</h3>
              <p className="text-sm text-gray-700">Collaborate with food brands and chefs</p>
            </div>
            
            <div className="bg-white border border-blue-300 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Data insights</h3>
              <p className="text-sm text-gray-700">Learn cooking preferences for better inventory</p>
            </div>
          </div>
        </div>
        
        {/* Threats */}
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl">
              ⚔️
            </div>
            <h2 className="text-2xl font-semibold text-red-800">Threats</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white border border-red-300 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-1">Competitors may copy</h3>
              <p className="text-sm text-gray-700">Feature can be replicated by other platforms</p>
            </div>
            
            <div className="bg-white border border-red-300 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-1">Recipe data maintenance</h3>
              <p className="text-sm text-gray-700">Keeping content accurate and up-to-date</p>
            </div>
            
            <div className="bg-white border border-red-300 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-1">Inventory challenges</h3>
              <p className="text-sm text-gray-700">Must ensure ingredient availability</p>
            </div>
            
            <div className="bg-white border border-red-300 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-1">User adoption risk</h3>
              <p className="text-sm text-gray-700">Feature may not resonate with all users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
