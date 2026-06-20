import { GraduationCap, Mail, Github, Linkedin, Database, BarChart3, Code } from 'lucide-react';

export default function AboutAuthor() {
  return (
    <div className="p-12 min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl mb-8 text-center text-[#6C2BD9]">About the Author</h1>
        
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-xl p-10">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-[#6C2BD9] to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl">
              K
            </div>
            <h2 className="text-3xl font-semibold mb-2">Kuldip</h2>
            <p className="text-lg text-gray-700 mb-1">BCA Student - Indus University</p>
            <p className="text-md text-[#6C2BD9] font-semibold">Aspiring Data Analyst | Business Analyst</p>
          </div>
          
          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2">
                <Database className="w-4 h-4" />
                SQL
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Excel
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Power BI
              </span>
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Tableau
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2">
                <Code className="w-4 h-4" />
                Python
              </span>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-white rounded-lg p-6 mb-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-[#6C2BD9]" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-700">Bachelor of Computer Applications (BCA)</p>
            <p className="text-gray-600">Indus University</p>
          </div>
          
          
            </div>
          </div>
        </div>
  );
}
