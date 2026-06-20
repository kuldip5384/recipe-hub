import { TestTube, BarChart3 } from 'lucide-react';

export default function ABTesting() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">A/B Testing Strategy</h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <TestTube className="w-8 h-8 text-[#6C2BD9]" />
          <p className="text-lg text-gray-700">Test Recipe Hub effectiveness before full rollout</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Version A */}
          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold mb-3">
                Version A
              </div>
              <h3 className="text-2xl font-semibold">Current App</h3>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-300">
              <h4 className="font-semibold mb-3">Features:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Standard product search</li>
                <li>• Category browsing</li>
                <li>• Individual item add to cart</li>
                <li>• Manual ingredient shopping</li>
              </ul>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Control Group: 50% of users</p>
            </div>
          </div>
          
          {/* Version B */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-[#6C2BD9] rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#6C2BD9] text-white px-4 py-2 rounded-full font-semibold mb-3">
                Version B
              </div>
              <h3 className="text-2xl font-semibold">Recipe Hub</h3>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-purple-300">
              <h4 className="font-semibold mb-3">Features:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Recipe browsing & search</li>
                <li>• One-click ingredient add</li>
                <li>• AI recipe suggestions</li>
                <li>• Meal planning tools</li>
              </ul>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Test Group: 50% of users</p>
            </div>
          </div>
        </div>
        
        {/* Metrics to Measure */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl">Metrics to Measure</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <h4 className="font-semibold text-lg mb-3 text-blue-900">📊 Cart Value</h4>
              <p className="text-sm text-gray-600 mb-2">Compare average order value between groups</p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <span className="font-semibold">Expected:</span> Version B shows 10-15% increase
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-green-200">
              <h4 className="font-semibold text-lg mb-3 text-green-900">🎯 Conversion Rate</h4>
              <p className="text-sm text-gray-600 mb-2">Track browse-to-purchase conversion</p>
              <div className="bg-green-50 p-3 rounded text-sm">
                <span className="font-semibold">Expected:</span> Version B shows higher conversion
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-purple-200">
              <h4 className="font-semibold text-lg mb-3 text-purple-900">⏱️ Session Time</h4>
              <p className="text-sm text-gray-600 mb-2">Measure user engagement duration</p>
              <div className="bg-purple-50 p-3 rounded text-sm">
                <span className="font-semibold">Expected:</span> Version B shows longer sessions
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-pink-200">
              <h4 className="font-semibold text-lg mb-3 text-pink-900">😊 User Satisfaction</h4>
              <p className="text-sm text-gray-600 mb-2">Collect feedback and ratings</p>
              <div className="bg-pink-50 p-3 rounded text-sm">
                <span className="font-semibold">Expected:</span> Version B higher satisfaction scores
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Test Duration:</span> Run A/B test for 2-4 weeks to gather statistically significant data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
