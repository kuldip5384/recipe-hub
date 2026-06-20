import { Mail, Github, Linkedin, Globe } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-[600px] bg-gradient-to-br from-[#6C2BD9] via-[#8B4FE8] to-[#A66EF7] flex items-center justify-center p-12">
      <div className="text-center text-white max-w-3xl">
        <div className="mb-8">
          <h1 className="text-6xl mb-6">Thank You! 🙏</h1>
          <p className="text-2xl text-white/90 mb-4">for reviewing this case study</p>
          <p className="text-lg text-white/80">
            I hope Recipe Hub brings value to your business and enhances the customer experience
          </p>
        </div>
        
        <div className="my-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl mb-2">Questions or Feedback?</p>
            <p className="text-white/80">I'd love to hear from you!</p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl mb-6">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span
              
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 flex items-center gap-3 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>kuldip605</span>
            </span>
            
            <span
              
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 flex items-center gap-3 transition-colors"
            >
             
              <Mail className="w-5 h-5" />
              <span>kuldipchaudhary5384@gmail.com</span>
            </span>
        
          </div>
        </div>
        
        
        <div className="mt-10">
          <p className="text-sm text-white/60">
            Prepared by Kuldip • May 2026 • BCA Student, Indus University
          </p>
        </div>
      </div>
    </div>
  );
}
