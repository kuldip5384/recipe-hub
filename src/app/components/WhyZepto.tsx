import { Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function WhyZepto() {
  return (
    <div className="p-12 min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-8 text-center text-[#6C2BD9]">Why Zepto Should Build This</h1>
        
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-2 border-[#6C2BD9] rounded-xl p-10">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#6C2BD9] text-white px-6 py-3 rounded-full text-xl font-semibold mb-6">
              Perfect Strategic Fit
            </div>
          </div>
          
          <p className="text-xl text-gray-800 leading-relaxed mb-10 text-center">
            This feature aligns with <span className="font-semibold text-[#6C2BD9]">Zepto's mission of delivering convenience</span>. 
            By reducing friction in grocery shopping and encouraging complete ingredient purchases, 
            Recipe Hub can <span className="font-semibold text-green-600">improve customer satisfaction</span> while 
            <span className="font-semibold text-green-600"> increasing business value</span>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-[#6C2BD9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customer-Centric</h3>
                  <p className="text-sm text-gray-700">Solves real pain points in the shopping journey</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Revenue Growth</h3>
                  <p className="text-sm text-gray-700">Drives higher order values and frequency</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Edge</h3>
                  <p className="text-sm text-gray-700">Differentiates Zepto from other platforms</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Brand Alignment</h3>
                  <p className="text-sm text-gray-700">Enhances Zepto's speed & convenience promise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#6C2BD9] to-purple-600 text-white rounded-xl p-8 text-center">
            <p className="text-2xl font-semibold mb-2">The Time is Now</p>
            <p className="text-lg text-white/90">
              Recipe Hub positions Zepto as the most innovative quick-commerce platform in India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
