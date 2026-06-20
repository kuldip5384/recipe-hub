import { Zap, Clock, Warehouse, Smartphone, Users, Briefcase, GraduationCap, Home as HomeIcon, Heart, Baby } from 'lucide-react';

export default function AboutZepto() {
  return (
    <div className="p-12 min-h-[600px]">
      {/* <h1 className="text-4xl mb-8 text-[#6C2BD9]">About Zepto</h1>
      
      <p className="text-lg text-gray-700 mb-10 max-w-3xl">
        Zepto is one of India's fastest-growing quick-commerce platforms, delivering groceries within minutes. 
        The platform focuses on convenience, speed, and customer satisfaction.
      </p> */}
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Business Model */}
        <div>
          <h2 className="text-2xl mb-6">Business Model</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <Zap className="w-6 h-6 text-[#6C2BD9] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Quick Commerce</p>
                <p className="text-sm text-gray-600">Ultra-fast delivery service</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <Clock className="w-6 h-6 text-[#6C2BD9] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">10-Minute Delivery</p>
                <p className="text-sm text-gray-600">Lightning-fast fulfillment</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <Warehouse className="w-6 h-6 text-[#6C2BD9] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Hyperlocal Warehouses</p>
                <p className="text-sm text-gray-600">Strategic inventory placement</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <Smartphone className="w-6 h-6 text-[#6C2BD9] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Mobile-first Shopping</p>
                <p className="text-sm text-gray-600">Optimized app experience</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Target Customers */}
        <div>
          <h2 className="text-2xl mb-6">Target Customers</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <Briefcase className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Working Professionals</p>
                <p className="text-sm text-gray-600">Busy schedules, need convenience</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <GraduationCap className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Students</p>
                <p className="text-sm text-gray-600">Quick snacks and essentials</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <HomeIcon className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Families</p>
                <p className="text-sm text-gray-600">Regular grocery shopping</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <Heart className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Young Couples</p>
                <p className="text-sm text-gray-600">Modern lifestyle needs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <Baby className="w-6 h-6 text-[#00C853] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Busy Parents</p>
                <p className="text-sm text-gray-600">Time-saving solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
