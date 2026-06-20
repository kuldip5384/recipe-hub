import { Briefcase, GraduationCap, Users } from 'lucide-react';

export default function UserPersonas() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">User Personas</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Persona 1 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-900">Working Professional</h3>
          
          <div className="space-y-3 text-sm">
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Age</p>
              <p className="font-semibold">28 years</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Living Situation</p>
              <p className="font-semibold">Lives alone</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Pain Point</p>
              <p className="font-semibold">Limited cooking time</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Need</p>
              <p className="font-semibold">Quick grocery shopping</p>
            </div>
          </div>
        </div>
        
        {/* Persona 2 */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-center mb-4 text-purple-900">College Student</h3>
          
          <div className="space-y-3 text-sm">
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Age</p>
              <p className="font-semibold">21 years</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Experience</p>
              <p className="font-semibold">Beginner cook</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Pain Point</p>
              <p className="font-semibold">Doesn't know all ingredients</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Need</p>
              <p className="font-semibold">Simple meal ideas</p>
            </div>
          </div>
        </div>
        
        {/* Persona 3 */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-center mb-4 text-green-900">Family Shopper</h3>
          
          <div className="space-y-3 text-sm">
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Age</p>
              <p className="font-semibold">38 years</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Responsibility</p>
              <p className="font-semibold">Shops for 4–5 people</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Behavior</p>
              <p className="font-semibold">Plans weekly meals</p>
            </div>
            
            <div className="bg-white/70 rounded p-3">
              <p className="text-gray-600">Need</p>
              <p className="font-semibold">Convenience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
